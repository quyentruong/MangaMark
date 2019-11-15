<template>
  <div>
    <div v-if="!$auth.loggedIn">
      Please login to enjoy MangaMark. If you don't have an account, sign up one for free.
    </div>
    <v-card v-else>
      <v-card-title>
        {{ enabled }}
        <v-spacer />
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
      <client-only>
        <v-data-table
          :headers="headersSlot[enabled]"
          :items="items"
          :search="search"
          :options.sync="options"
          @page-count="pageCount = $event"
          hide-default-footer
        >
          <!--        :footer-props="{-->
          <!--          showFirstLastPage: true,-->
          <!--          showCurrentPage: true,-->
          <!--          disableItemsPerPage: true-->
          <!--        }"-->
          <!--        Starting column name-->
          <template v-for="slot in $store.state.itemSlots" v-slot:[slot.name]="props">
            <ModifyCell :key="slot.name" :cell="props" :column-name="slot.value" @modifyItem="modifyChild" />
          </template>
          <!--        Ending column chapter or episode-->
          <template v-slot:item.updated_at="{ item }">
            <div>{{ $moment.utc(item.updated_at).local().format('YYYY-MM-DD HH:mm:ss') }}</div>
          </template>
          <template v-slot:item.action="{ item }">
            <AddDecreaseNumber :item="item" :enabled="enabled" @modifyItem="modifyChild" column-name="quantity" />
            <v-icon
              @click="deleteItem(item)"
              class="mr-2"
              color="red"
              size="25px"
            >
              mdi-delete
            </v-icon>
            <v-icon
              @click="googleItem(item)"
              class="mr-2"
              color="blue"
              size="25px"
            >
              mdi-google
            </v-icon>
            <v-icon
              @click="copyItem(item)"
              class="mr-2"
              color="green"
              size="25px"
            >
              mdi-content-copy
            </v-icon>
          </template>
        </v-data-table>
        <div class="text-center">
          <v-pagination v-model="options.page" :length="pageCount" :total-visible="7" />
        </div>
      </client-only>
    <!--      Ending datatable-->
    </v-card>
  </div>
</template>

<script>
import AddNewItem from '../components/AddNewItem'
import ModifyCell from '../components/ModifyCell'
import AddDecreaseNumber from '../components/AddDecreaseNumber'
export default {
  components: { AddDecreaseNumber, ModifyCell, AddNewItem },
  auth: false,
  data () {
    return {
      options: {},
      pageCount: 0,
      search: '',
      enabled: '',
      slots: [
        'Manga',
        'Anime'
      ],
      headersSlot: {},
      items: [],
      modelstate: {}
    }
  },
  head: {
    title: 'Index'
    // meta: [
    //   { hid: 'description', name: 'description', content: 'Manage your list of interests' }
    // ]
  },
  watch: {
    options: {
      handler () {
        this.$warehouse.set(`options_${this.enabled}`, this.options)
      },
      deep: true
    },
    enabled (slot) {
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
    // this.enabled = this.$warehouse.get('slot', 'Manga')
    // this.fetchItem()
    this.options = this.$warehouse.get(`options_${this.enabled}`, {})
  },
  methods: {
    modifyChild () {
      this.fetchItem()
    },
    async fetchItem () {
      const { data } = await this.$axios.$get(`category/${this.enabled.toLowerCase()}/`)
      this.items = data
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm(`Are you sure you want to delete ${item.name}?`) && this.$axios.$delete(`category/${this.enabled.toLowerCase()}/${item.id}`).then(() => {
        this.$store.dispatch('setSnackbar', { color: 'error', text: 'Data deleted' })
        this.items.splice(index, 1)
      })
    },

    googleItem (item) {
      let url = encodeURI(`https://www.google.com/search?q=${item.name} chapter ${parseInt(item.quantity) + 1}`)
      if (this.enabled === 'Anime') {
        url = encodeURI(`https://www.google.com/search?q=${item.name} season ${parseInt(item.season)} episode ${parseInt(item.quantity) + 1}`)
      }
      window.open(url, '_blank')
    },
    copyItem (item) {
      this.$copyText(item.name).then((e) => {
        this.$store.dispatch('setSnackbar', { color: 'info', text: `Copied ${item.name}` })
      }, (e) => {
        this.$store.dispatch('setSnackbar', { color: 'error', text: 'Can not copy' })
      })
    }
  }
}
</script>
<style scoped>

</style>
