<script setup>
import RecordListing from '@/components/RecordListing.vue'
</script>
<template>
  <section>
    <RecordListing />
  </section>
</template>
<style scoped>
 section {
    padding-top: 2em;
    background: #FFF;
    grid-column: 2 / span 10;
/*     display: grid;
    grid-template-columns: repeat(8, 12.5%); */
  }

</style>