<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 holder">
        <HeroImage />
        <Transform data-aos="fade-right" data-aos-duration="1500" />
        <Empowering data-aos="fade-left" data-aos-duration="1500" />
        <HomeSupport data-aos="fade-right" data-aos-duration="1500" />
        <CuttingEdge data-aos="fade-left" data-aos-duration="1500" />
      </div>
    </div>
  </div>
</template>

<script>
import CuttingEdge from '../components/CuttingEdge.vue';
import Empowering from '../components/Empowering.vue';
import HomeSupport from '../components/HomeSupport.vue';
import Transform from '../components/Transform.vue';

export default {
  setup() {
    return {};
  },
  components: { Transform, Empowering, HomeSupport, CuttingEdge }
}
</script>

<style scoped lang="scss">
.holder {
  max-width: 100vw;
}
</style>
