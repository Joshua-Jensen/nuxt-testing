<template>
  <div class="row margin">
    <div class="col-12 d-flex justify-content-center">

      <div class="text-center p-2">
        <img class="img-fluid" src="https://www.intellatek.net/assets/images/team/jj.png" alt="">
      </div>
      <div class="text-center p-2 ">
        <img class="img-fluid" src="https://www.intellatek.net/assets/images/team/luke.png" alt="">
      </div>


      <div class="text-center p-2">
        <img class="img-fluid" src="https://www.intellatek.net/assets/images/team/chris.png" alt="">
        <h6>chris</h6>
        <p>support technician</p>
      </div>
      <div class="text-center p-2">
        <img class="img-fluid" src="https://www.intellatek.net/assets/images/team/bejay.png" alt="">
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';


export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
img {
  max-width: 300px;
}

.margin {
  margin-top: 10vh;
}
</style>