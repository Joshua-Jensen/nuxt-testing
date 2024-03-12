<template>
  <div class="row margin position-relative">

    <div class="col-md-6 p-0">
      <div class="image-box padding
      ">
        <img class="shadow rounded" src="/Image.png" alt="">
      </div>
    </div>

    <div class="col-md-6 p-4 rounded">
      <div>
        <h3>transform your school</h3>
        <h5>get started today</h5>
      </div>
      <h5>discover power of technology</h5>
      <button class="btn btn-rounded btn-primary">
        View Services
      </button>

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
.bg-gray {
  background-color: gray 10px 10px;
  // width: fit-content;
  // height: fit-content;
}

.shadow {
  filter: drop-shadow(-20px 20px #C2C2C2);
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
  padding-left: 40px;
}

.padding {
  padding-bottom: 40px;
}

// .image-box {
//   // border-radius: 15px;

// }

// .offset-Background {
//   min-width: fit-content;
// }

// .offset {
//   // max-width: 100%;
//   position: absolute;
//   top: -40px;
//   left: -40px;
// }

// </style>