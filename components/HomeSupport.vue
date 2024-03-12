<template>
  <div class="row margin">


    <div class="col-md-6 padding">
      <img class="image shadow" src="/SchoolSupportImg.png" alt="">
    </div>
    <div class="col-md-6">
      <!-- <h5> 24/7 support</h5> -->
      <h2>reliable support for your school</h2>
      <p>intellatek takes your security seriously so you can relax </p>
      <button class="btn btn-primary ">contact support</button>
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
.image {
  border-radius: 15px;
  max-width: 100%;
}

.shadow {
  filter: drop-shadow(20px 20px #C2C2C2);
  // border-start-start-radius: 15px;
  max-width: 100%;
}

.margin {
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 20vw;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  padding-bottom: 40px;
}

.padding {
  margin-bottom: 40px;
}
</style>