<template>
  <div class="row margin">

    <div class="col-md-6 rounded">
      <h3>cutting edge it solutions</h3>
      <p>Our powerful tools helps schools reduce costs and optimize their operations. </p>
      <button class="btn btn-primary">Learn More</button>
    </div>
    <div class="col-md-6 rounded d-flex justify-content-end padding">
      <img class="image shadow" src="/aiGirlAtDesk.png" alt="">
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
.margin {
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-right: 20vw;
  background-color: white;
  border-radius: 15px;
  // padding-right: 0px !important;
  // padding: 3em;
  padding: 20px;
  padding-bottom: 40px;
}

.padding {
  padding: 1em;
  padding-left: 1.5em;
}

.shadow {
  filter: drop-shadow(20px 20px #C2C2C2);
}

.image {
  border-radius: 15px;
  max-width: 100%;
}
</style>