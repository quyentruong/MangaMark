<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on">
        <v-list-item-icon>
          <v-icon
            v-on="on"
            class="mr-2"
            color="grey"
            size="25px"
          >
            mdi-axis-arrow
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Other Name</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Other Name</span>
      </v-card-title>
      <v-card-text>
        <v-container ref="container">
          <v-row>
            <v-col>
              <v-text-field
                v-model="cell.other_name_1"
                :error-messages="modelstate['other_name_1']"
                label="Other Name 1"
                counter
              />
            </v-col>
            <v-col sm="3" md="3">
              <v-btn @click="copyItem (cell.other_name_1)" icon>
                <v-icon
                  class="mr-2"
                  color="green"
                  size="25px"
                >
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn @click="googleItem (cell.other_name_1, 0, cell.quantity)" icon>
                <v-icon
                  class="mr-2"
                  color="blue"
                  size="25px"
                >
                  mdi-google
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="cell.other_name_2"
                :error-messages="modelstate['other_name_2']"
                label="Other Name 2"
                counter
              />
            </v-col>
            <v-col sm="3" md="3">
              <v-btn @click="copyItem (cell.other_name_2)" icon>
                <v-icon
                  class="mr-2"
                  color="green"
                  size="25px"
                >
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn @click="googleItem (cell.other_name_2, 0, cell.quantity)" icon>
                <v-icon
                  class="mr-2"
                  color="blue"
                  size="25px"
                >
                  mdi-google
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="cell.other_name_3"
                :error-messages="modelstate['other_name_3']"
                label="Other Name 3"
                counter
              />
            </v-col>
            <v-col sm="3" md="3">
              <v-btn @click="copyItem (cell.other_name_3)" icon>
                <v-icon
                  class="mr-2"
                  color="green"
                  size="25px"
                >
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn @click="googleItem (cell.other_name_3, 0, cell.quantity)" icon>
                <v-icon
                  class="mr-2"
                  color="blue"
                  size="25px"
                >
                  mdi-google
                </v-icon>
              </v-btn>
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
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'OtherName',
  props: {
    cell: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({
    dialog: false,
    modelstate: {}
  }),
  methods: {
    save () {
      this.cell.action = 'other_name'
      this.$axios.$put(`category/manga/${this.cell.id}`, this.cell).then(() => {
        this.dialog = false
        this.$store.dispatch('setSnackbar', { text: this.cell.name + ' updated' })
      }).catch((error) => {
        if (error.response.status === 422) {
          // this.$store.dispatch('setSnackbar', { color: 'error', text: error.response.data.error[this.columnName][0] })
        }
      }).finally(() => {
        this.$emit('modifyItem')
      })
    },
    cancel () {
      this.dialog = false
      this.$emit('modifyItem')
    },
    copyItem (name) {
      this.$emit('copyItem', name, this.$refs.container)
    },
    googleItem (name, season, quantity) {
      this.$emit('googleItem', name, season, quantity)
    }
  }
}
</script>

<style scoped>

</style>
