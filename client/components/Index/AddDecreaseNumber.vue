<template>
  <span>
    <v-icon
      v-if="buttonType==='+'"
      @click="modifyQuantity(item, columnName,'+')"
      class="mr-2"
      color="green"
      size="25px"
    >
      mdi-arrow-up-circle-outline
    </v-icon>
    <v-list-item @click="modifyQuantity(item, columnName,'-')" v-else>
      <v-list-item-icon>
        <v-icon
          class="mr-2"
          color="red"
          size="25px"
        >
          mdi-arrow-down-circle-outline
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Decrease</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

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
    },
    buttonType: {
      type: String,
      default: '+'
    }
  },
  methods: {
    modifyQuantity (item, type, action) {
      const temp = this.simplePlusMinus(parseFloat(item[type]), 1, action)
      if (temp === -1) {
        this.$store.dispatch('setSnackbar', { color: 'error', text: 'The minimum is 1' })
        return
      }

      item[type] = temp
      item.action = 'number'
      const text = action === '+' ? 'Increase' : 'Decrease'
      const color = action === '+' ? 'primary' : 'secondary'

      this.$axios.$put(`category/${this.enabled.toLowerCase()}/${item.id}`, item).then(() => {
        this.$emit('modifyItem')
        this.$store.dispatch('setSnackbar', { color, text: text + ' activated' })
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
