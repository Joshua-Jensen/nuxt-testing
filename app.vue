<template>
  <header>
    <NavBar />
  </header>
  <NuxtPage />
  <footer>
    <FooterBar />
  </footer>

</template>

<script>
import { onMounted } from "vue"
export default {
  setup() {
    function createSchoolList() {
    }
    onMounted(() => {
      School.createSchoolList()
    })
    return {

    }
  },

}
</script>


<style scoped>
:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  padding: 1.5em;
}
</style>
