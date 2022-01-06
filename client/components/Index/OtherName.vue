<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <template #activator="{ on }">
      <v-list-item v-on="on">
        <v-list-item-icon>
          <v-icon class="mr-2" color="grey" size="25px" v-on="on">
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
              <v-btn icon @click="copyItem(cell.other_name_1)">
                <v-icon class="mr-2" color="green" size="25px">
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn
                icon
                @click="
                  googleItem(cell.other_name_1, cell.season, cell.quantity)
                "
              >
                <v-icon class="mr-2" color="blue" size="25px">
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
              <v-btn icon @click="copyItem(cell.other_name_2)">
                <v-icon class="mr-2" color="green" size="25px">
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn
                icon
                @click="
                  googleItem(cell.other_name_2, cell.season, cell.quantity)
                "
              >
                <v-icon class="mr-2" color="blue" size="25px">
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
              <v-btn icon @click="copyItem(cell.other_name_3)">
                <v-icon class="mr-2" color="green" size="25px">
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn
                icon
                @click="
                  googleItem(cell.other_name_3, cell.season, cell.quantity)
                "
              >
                <v-icon class="mr-2" color="blue" size="25px">
                  mdi-google
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="cancel()"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'OtherName',
  props: {
    oldCell: {
      type: Object,
      default: () => {
        return {}
      },
    },
    enabled: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    dialog: false,
    modelstate: {},
  }),
  created() {
    this.cell = { ...this.oldCell }
  },
  methods: {
    save() {
      this.cell.action = 'other_name'
      delete this.cell.created_at
      delete this.cell.updated_at
      this.$axios
        .$put(
          `category/${this.enabled.toLowerCase()}/${this.cell.id}`,
          this.cell
        )
        .then(() => {
          this.dialog = false
          this.$store.dispatch('setSnackbar', {
            text: this.cell.name + ' updated',
          })
        })
        .catch((error) => {
          if (error.response.status === 422) {
            // this.$store.dispatch('setSnackbar', { color: 'error', text: error.response.data.error[this.columnName][0] })
          }
        })
        .finally(() => {
          this.$emit('modifyItem')
        })
    },
    cancel() {
      this.dialog = false
      this.$emit('modifyItem')
    },
    copyItem(name) {
      this.$emit('copyItem', name, this.$refs.container)
    },
    googleItem(name, season, quantity) {
      this.$emit('googleItem', name, season, quantity)
    },
  },
}
</script>

<style scoped></style>
