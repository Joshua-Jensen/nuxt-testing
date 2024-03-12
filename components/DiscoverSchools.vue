<template>
  <div class="row justify-content-center">
    <div class="col-10 school-card p-3 rounded">
      <div class="row pe-3">

        <div class="col-md-4">
          <div class="img-1 rounded my-2"></div>
          <div class="img-2 rounded my-2"></div>
        </div>
        <div class="col-md-8 img-3 rounded">

        </div>

        <div class="col-12 text-end mt-3">
          <button @click="explore()" class="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';


export default {
  

  setup() {
    const router = useRouter()
    return {
      explore() {
        router.push('/schools')
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.img-1 {
  height: 20vh;
  max-width: 100%;
  background-image: url('https://www.intellatek.net/assets/images/schools/doral-arvada/doral-arvada_1.jpg');
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}

.img-2 {
  height: 20vh;
  max-width: 100%;
  background-image: url('https://www.intellatek.net/assets/images/schools/doral-redrock/doral-redrock_mu.jpg');
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}

.img-3 {
  height: 43vh;
  max-width: 100%;
  background-image: url('https://www.intellatek.net/assets/images/schools/hawthorn-sjordan/hawthorn-sjordan_1.jpg');
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}

.school-card {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style> 