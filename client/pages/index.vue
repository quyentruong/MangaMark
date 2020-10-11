<template>
  <div>
    <div v-if="!$auth.loggedIn">
      Please login to enjoy MangaMark. If you don't have an account, sign up one for free. update
    </div>
    <v-card v-else>
      <v-card-title>
        <!--        Starting Slot-->
        <v-select v-model="enabled" :items="slots" label="Slot" />
        <!--        Ending Slot-->
        <v-spacer />
        <!--        Starting Filter-->
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          clearable
          hide-details
          filled
          rounded
          dense
        />
        <!--        Ending Filter-->
        <v-spacer />
        <!--        Starting Add new item-->
        <AddNewItem :enabled="enabled" @modifyItem="modifyChild" />
        <!--        Ending Add new Item-->
      </v-card-title>
      <!--      Starting datatable-->
      <v-data-table
        :custom-filter="customFilter"
        :headers="headersSlot[enabled]"
        :items="items"
        :search="search"
        :options.sync="options"
        @page-count="pageCount = $event"
        hide-default-footer
        single-expand
      >
        <!--        Starting column name-->
        <template v-for="slot in $store.state.itemSlots" v-slot:[slot.name]="props">
          <ModifyCell
            :key="slot.name"
            :cell="props"
            :column-name="slot.value"
            :class="oldRead(props)"
            @modifyItem="modifyChild"
            :enabled="enabled"
          />
        </template>
        <!--        Ending column chapter or episode-->
        <template v-slot:item.updated_at="{ item }">
          <div>{{ $moment.utc(item.updated_at).local().format('YYYY-MM-DD HH:mm:ss') }}</div>
        </template>
        <template v-slot:item.action="{ item }">
          <AddDecreaseNumber :item="item" :enabled="enabled" @modifyItem="modifyChild" button-type="+" column-name="quantity" />
          <v-menu offset-y close-on-content-click>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                icon
                color="cyan"
                dark
              >
                <v-icon>
                  mdi-tools
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <AddDecreaseNumber :item="item" :enabled="enabled" @modifyItem="modifyChild" button-type="-" column-name="quantity" />
              <DeleteDialog :item="item" @deleteItem="deleteItem" />
              <v-list-item @click="googleItem(item.name, item.season, item.quantity)">
                <v-list-item-icon>
                  <v-icon
                    class="mr-2"
                    color="blue"
                    size="25px"
                  >
                    mdi-google
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Google Name</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="copyItem(item.name)">
                <v-list-item-icon>
                  <v-icon
                    class="mr-2"
                    color="green"
                    size="25px"
                  >
                    mdi-content-copy
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Copy Name</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <OtherName :enabled="enabled" :cell="item" @modifyItem="modifyChild" @copyItem="copyItem" @googleItem="googleItem" />
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
      <div class="text-center">
        <v-pagination v-model="options.page" :length="pageCount" :total-visible="7" />
      </div>
      <!--      Ending datatable-->
    </v-card>
  </div>
</template>

<script>
import AddNewItem from '../components/Index/AddNewItem'
import ModifyCell from '../components/Index/ModifyCell'
import AddDecreaseNumber from '../components/Index/AddDecreaseNumber'
import DeleteDialog from '../components/Index/DeleteDialog'
import OtherName from '@/components/Index/OtherName'
export default {
  components: { OtherName, DeleteDialog, AddDecreaseNumber, ModifyCell, AddNewItem },
  auth: false,
  data () {
    return {
      selectExpand: false,
      showExpand: true,
      editable: false,
      options: {},
      pageCount: 0,
      search: '',
      enabled: '',
      slots: [
        'Manga',
        'Anime',
        'TVShow'
      ],
      headersSlot: {},
      items: [],
      modelstate: {}
    }
  },
  head: () => ({
    title: 'Index'
  }),
  watch: {
    options: {
      handler () {
        this.$warehouse.set(`options_${this.enabled}`, this.options)
      },
      deep: true
    },
    enabled (slot) {
      this.showExpand = slot === 'Manga'
      this.selectExpand = false
      this.$warehouse.set('slot', slot)
      this.$store.commit('setArrayHeader', { slot, array: this.headersSlot[slot] })
      this.fetchItem()
      this.options = this.$warehouse.get(`options_${slot}`, {})
    }
  },
  async asyncData ({ $axios, $warehouse, $auth }) {
    if ($auth.loggedIn) {
      const enabled = $warehouse.get('slot', 'Manga')
      const { data } = await $axios.$get(`category/${enabled.toLowerCase()}/`)
      return { items: data, enabled }
    }
  },
  created () {
    this.headersSlot = this.$store.state.headersSlot
    this.showExpand = this.enabled === 'Manga'
    // this.enabled = this.$warehouse.get('slot', 'Manga')
    // this.fetchItem()
    this.options = this.$warehouse.get(`options_${this.enabled}`, {})
  },
  methods: {
    customFilter (value, search, items) {
      // eslint-disable-next-line camelcase
      const { name, quantity, season, other_name_1, other_name_2, other_name_3, updated_at } = items
      // delete items.updated_at
      // delete items.created_at
      // delete items.user_id
      // delete items.id
      /*
      Filter for individual words in search string. Filters
      all object values rather than just the keys included
      in the data table headers.
       */
      const wordArray = search
        .toString()
        .toLowerCase()
        .split(' ')
        .filter(x => x)
      return wordArray.every(word =>
        JSON.stringify(Object.values({ name, quantity, season, other_name_1, other_name_2, other_name_3, updated_at }))
          .toString()
          .toLowerCase()
          .includes(word)
      )
    },
    expandFunc (expand, isExpanded) {
      expand(isExpanded)
      this.selectExpand = true
    },
    oldRead (props) {
      // console.log(props)
    },
    modifyChild () {
      this.fetchItem()
      this.search = ''
    },
    async fetchItem () {
      const { data } = await this.$axios.$get(`category/${this.enabled.toLowerCase()}/`)
      this.items = data
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      // confirm(`Are you sure you want to delete ${item.name}?`) &&
      this.$axios.$delete(`category/${this.enabled.toLowerCase()}/${item.id}`).then(() => {
        this.$store.dispatch('setSnackbar', { color: 'error', text: 'Data deleted' })
        this.items.splice(index, 1)
      })
    },

    googleItem (name, season, quantity) {
      let url = encodeURI(`https://www.google.com/search?q=${name} season ${parseInt(season)} episode ${parseFloat(quantity) + 1}`)
      if (this.enabled === 'Manga') {
        url = encodeURI(`https://www.google.com/search?q=${name} chapter ${parseFloat(quantity) + 1}`)
      }
      window.open(url, '_blank')
    },
    copyItem (name, container) {
      // const container = this.$refs.container
      this.$copyText(name, container).then((e) => {
        this.$store.dispatch('setSnackbar', { color: 'info', text: `Copied ${name}` })
      }, (e) => {
        this.$store.dispatch('setSnackbar', { color: 'error', text: 'Can not copy' })
      })
    }
  }
}
</script>
<style scoped>

</style>
