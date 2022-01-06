<template>
  <div>
    <v-expansion-panels focusable popout>
      <v-expansion-panel v-for="(item, i) in faq" :key="i">
        <v-expansion-panel-header>
          {{ item.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import faqContent from '@/utils/faq-content'
export default {
  data: () => ({
    faq: [],
  }),
  head: () => ({
    title: 'FAQ',
  }),
  auth: false,
  created() {
    this.faq = faqContent
  },
}
</script>

<style></style>
