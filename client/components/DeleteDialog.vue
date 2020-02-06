<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on">
        <v-list-item-icon>
          <v-icon
            class="mr-2"
            color="red"
            size="25px"
          >
            mdi-delete
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title class="headline">
        {{ item.name }}
      </v-card-title>
      <v-card-text>Are you sure you want to delete this ?</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="dialog = false" color="green darken-1" text>
          Cancel
        </v-btn>
        <v-btn @click="confirmDelete" color="green darken-1" text>
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteDialog',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    confirmDelete () {
      this.dialog = false
      this.$emit('deleteItem', this.item)
      // console.log(this.item)
    }
  }
}
</script>

<style scoped>

</style>
