<script>

export default {
  methods : {
    showSideBar() {
      console.log("checking whether to show sidebar.");
      return true;
    }

  }
}

</script>
<template>
    <w-drawer
      v-if="showSideBar()"
      v-model="openDrawer"
      absolute
      bg-color="#DDD"
      left
      width="16em">
      well?
    </w-drawer>
</template>

<style scoped>


</style>
