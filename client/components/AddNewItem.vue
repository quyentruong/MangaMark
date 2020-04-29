<template>
  <!--        Starting Add new item-->
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn :color="$vuetify.theme.dark === true ? '' : 'indigo'" v-on="on" dark class="mb-2" fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-form ref="form" lazy-validation>
        <v-card-title>
          <span class="headline">Add new {{ enabled }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="form.name" :rules="[required('Name')]" :error-messages="modelstate['name']" label="Name" counter />
              </v-col>
              <v-col v-if="enabled!=='Manga'" cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.season"
                  :rules="[required('Season'), quantity()]"
                  :error-messages="modelstate['season']"
                  type="number"
                  label="Season"
                  min="1"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.quantity"
                  :label="enabled==='Manga'?'Chapter':'Episode'"
                  :rules="[required(enabled==='Manga'?'Chapter':'Episode'), quantity()]"
                  :error-messages="modelstate['quantity']"
                  type="number"
                  min="1"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn @click="cancel()" color="blue darken-1" text>
            Cancel
          </v-btn>
          <v-btn @click="save()" color="blue darken-1" text>
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
  <!--        Ending Add new Item-->
</template>

<script>
import validations from '@/utils/validations'
export default {
  name: 'AddNewItem',
  props: {
    enabled: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dialog: false,
    modelstate: {},
    form: {},
    ...validations
  }),
  created () {
    this.form = this.initialForm()
  },
  methods: {
    initialForm () {
      return {
        name: '',
        quantity: 1,
        season: 1,
        other_name: '',
        user_id: this.$auth.user.id
      }
    },
    save () {
      if (this.$refs.form.validate()) {
        this.form.name = this.form.name.trim()
        this.$axios.$post(`category/${this.enabled.toLowerCase()}/`, this.form).then((response) => {
          this.dialog = false
          this.$store.dispatch('setSnackbar', { text: 'New item added' })
          this.$emit('modifyItem')
          this.$refs.form.resetValidation()
          this.form = this.initialForm()
        })
          .catch((error) => {
            if (error.response.status === 422) {
              this.modelstate = error.response.data.error
            }
          })
      }
    },
    cancel () {
      this.dialog = false
      this.$refs.form.resetValidation()
      this.form = this.initialForm()
    }
  }
}
</script>

<style scoped>

</style>
