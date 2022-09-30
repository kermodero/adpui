<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <w-app>
    <main>    
      <Header />
      <SideMenu />
      <RouterView />
    </main>
  </w-app>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(12, 8.33%);
  grid-auto-rows: min-content;
/*   grid-template-rows: 100px 100px; */
  width: 100%;
}
</style>
