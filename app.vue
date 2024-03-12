import FooterBar from "./components/FooterBar.vue";

<template>
  <header>
    <NavBar />
  </header>
  <NuxtPage />
  <footer>
    <FooterBar />
  </footer>

</template>


<style scoped>
:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  padding: 1.5em;
}
</style>
