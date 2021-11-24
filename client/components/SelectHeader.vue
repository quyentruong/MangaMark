<template>
  <v-select
    v-model="value"
    :items="items"
    label="Columns"
    multiple
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index === 0">
        <span>{{ item.text }}</span>
      </v-chip>
      <span
        v-if="index === 1"
        class="grey--text caption"
      >(+{{ value.length - 1 }} others)</span>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'SelectHeader',
  props: {
    enabled: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    value: ''
  }),
  computed: {
    items () {
      return this.$store.state.currentHeader[this.enabled]
    }
  },
  watch: {
    value (newVal) {
      if (newVal.length > 0 && typeof (newVal[0]) === 'object') { return }
      const headers = this.$store.state.headersSlot[this.enabled]
      const newHeader = headers.filter((e) => {
        return newVal.includes(e.value)
      })
      this.$store.commit('setArrayHeader', { slot: this.enabled, array: newHeader })
    }
  },
  created () {
    this.$emit('turnOffEdit')
    this.value = this.$store.state.headersSlot[this.enabled]
    this.$store.commit('setArrayHeader', { slot: this.enabled, array: this.value })
  }
}
</script>

<style scoped>

</style>
