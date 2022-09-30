<script setup>

</script>

<template>
  <header>
<!--     <w-icon
      class="mr1" //hamburger
      xl
      color="primary-dark1">
      mdi mdi-home
    </w-icon> -->
    <div class="logo">
      <img src="../assets/img/logo-ontario@2x.png" />
    </div>
    <div class="title">
      <h1>Ontario Assistive Devices Program</h1>
    </div>
    <div>

    </div>
  </header>
</template>

<style scoped>
  header {
    padding-top: 1em;
    height: 5em;
    background: gray;
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(12, 8.33%);
  }

  .logo {
    grid-column: 1 / span 2;
  }

  .title {
    grid-column: 4 / span 5;
    color: #222;
  }

</style>
