<template>
  <div class="container-fluid position-relative p-0 text-color">
    <div class="row justify-content-center">
      <div class="col-12 bg-img mb-5">
      </div>
      <div class="text-box text-center">
        <h2>Contact Us</h2>
        <div class="">
          <h6 class=""><router-link to="/" class="no-hyperlink">Home</router-link> /services</h6>
        </div>
      </div>
      <div class="col-8">
        <div class="row">

          <div class="col-md-4 align-items-center row padding text-dark">
            <h6 class="">Phone</h6>
            <a class="mb-2 no-hyperlink text-dark " href="tel:+1702558-8324">(702) 558-8324</a>
            <h6>Email</h6>
            <a class="mb-2 no-hyperlink text-dark" href="mailto:support@intellatek.net">support@intellatek.net</a>
            <h6 class="">Address</h6>
            <p>1378 Paseo Verde Pkwy #200, Henderson, NV 89012</p>
          </div>
          <div class="col-md-8">
            <img class="placeholder" src="/intellatekMaps.png" alt="">
          </div>
        </div>
        <ContactEmail />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';


export default {
  setup() {
    return {};
  }
}
</script>


<style lang="scss" scoped>
.bg-img {
  height: 410px;
  background-image: url(/bg12.jpg);
  background-position: center;
  width: 100%;
  filter: blur(5px);
}

.text-box {
  position: absolute;
  top: 205px;
  text-shadow: black 0px 0px 14px;
}

.no-hyperlink {
  color: white;
  text-decoration: none;
}

.text-color {
  color: white;
}

.padding {
  padding-left: 3em;
}

.placeholder {
  width: 100%;
}
</style>
