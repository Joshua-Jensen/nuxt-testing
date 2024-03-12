<template>
  <div class="container-fluid">
    <div class="row space-between">
      <div class="col-6">

        <router-link :to="{ name: 'index' }">
          <img src="/intellatek.png" alt="intellatek logo" class="sizing">
        </router-link>
        <button class="btn btn-rounded" @click="Services()"> Services </button>
        <button class="btn btn-rounded" @click="Discover()"> Discover Us </button>
        <button class="btn btn-rounded" @click="Contact()"> Contact Us </button>
      </div>
      <div class="col-4"></div>

    </div>

  </div>
</template>

<script  setup>
const router = useRouter()
function Services(){
  router.push(`/services`)
}

function Discover(){
  router.push(`/discover`)
}

function Contact(){
  router.push(`/contact`)
}

</script>

<style lang="scss" scoped>
.sizing {
  /* padding: 4em; */
  margin: 2em;
  height: 3vh;
}
</style>