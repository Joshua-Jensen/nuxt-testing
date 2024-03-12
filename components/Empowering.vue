<template>
  <div class="row margin">
    <div class="col-md-6 padding">
      <h3>empowering schools with it solutions</h3>
      <h5>join our community of educators</h5>
      <button class="btn btn-primary">get started</button>
    </div>
    <div class="col-md-6 d-flex justify-content-end">
      <img class="rounded shadow" src="/empoweringAiImage.png" alt="">
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
  filter: drop-shadow(-20px 20px #C2C2C2);
  max-width: 100%;
}
</style>