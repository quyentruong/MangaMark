<template>
  <span>
    <v-icon
      @click="modifyQuantity(item, columnName,'+')"
      class="mr-2"
      color="green"
      size="25px"
    >
      mdi-arrow-up-circle-outline
    </v-icon>
    <v-icon
      @click="modifyQuantity(item, columnName,'-')"
      class="mr-2"
      color="red"
      size="25px"
    >
      mdi-arrow-down-circle-outline
    </v-icon>
  </span>
</template>

<script>
export default {
  name: 'AddDecreaseNumber',
  props: {
    columnName: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    enabled: {
      type: String,
      default: ''
    }
  },
  methods: {
    modifyQuantity (item, type, action) {
      const temp = this.simplePlusMinus(parseInt(item[type]), 1, action)
      if (temp === -1) {
        this.$store.dispatch('setSnackbar', { color: 'error', text: 'The minimum is 1' })
        return
      }

      item[type] = temp
      item.action = 'number'

      this.$axios.$put(`category/${this.enabled.toLowerCase()}/${item.id}`, item).then(() => {
        this.$emit('modifyItem')
        this.$store.dispatch('setSnackbar', { text: 'Data updated' })
      })
    },
    simplePlusMinus (a, b, action) {
      const result = action === '+' ? a + b : a - b
      return result === 0 ? -1 : result
    }
  }
}
</script>

<style scoped>

</style>
