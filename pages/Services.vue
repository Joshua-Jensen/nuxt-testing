<template>
  <div class="row justify-content-center pb-5">
    <div class="col-8 custom-card rounded p-3 px-5 position-relative" v-if="activeItem == 1">
      <img class="image mb-3" src="https://www.intellatek.net/assets/images/services/remote.png" alt="">
      <h2>State / Federal Testing Support: MAP, ACT, WIDA, SBAC</h2>
      <p class="margin-bottom">Intellatek configures testing servers as well as the virtual TSM’s needed in order to
        test multiple grade
        levels at once. Furthermore, we set up the device toolkit on behalf of the campuses, which provide the
        configuration files to each computer. Additionally, confirming that the latest testing software version has been
        pushed out to all devices across all campuses. We also work with testing coordinators to prepared them for all
        the
        “How To’s” and “What If’s” needed to successfully test. Next, spot checked multiple laptop, desktops,
        chromebooks
        to make sure testing is working. Intellatek also provides a tech for the first day of testing just in case to
        provide additional support for test coordinators.</p>
      <button @click="close()" class="btn btn-danger btn-rounded button-position">close</button>
    </div>
    <div class="col-12" v-if="activeItem == 2">2</div>
    <div class="col-12" v-if="activeItem == 3">3</div>
    <div class="col-12" v-if="activeItem == 4">4</div>
  </div>




  <div class="row px-5 holder">
    <div class="padding col-md-3 col-sm-6 py-3 item selectable">
      <div class="services-card  rounded background-testing d-flex justify-content-center align-items-center">

        <h4 class="readability"> Testing Support</h4>
        <p class="readability-dark rounded">Intellatek configures testing servers as well as the virtual TSM’s needed in
          order to
          test multiple grade
          levels at once. Furthermore, we set up the device toolkit on behalf of the campuses, which provide the
          configuration files to each computer. Additionally, confirming that the latest testing software version has
          been
          pushed out to all devices across all campuses. We also work with testing coordinators to prepared them for all
          the
          “How To’s” and “What If’s” needed to successfully test. Next, spot checked multiple laptop, desktops,
          chromebooks
          to make sure testing is working. Intellatek also provides a tech for the first day of testing just in case to
          provide additional support for test coordinators.</p>
        <button @click="open(1)" class="btn btn-primary opening">learn more</button>
      </div>
    </div>
    <div class="padding col-md-3 col-sm-6 py-3 item selectable">
      <div class="services-card rounded background-app d-flex justify-content-center align-items-center">
        <h4 class="readability"> Application Management</h4>
        <p class="readability-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatem veniam
          sit deserunt nemo culpa sint quaerat quasi nostrum alias aperiam repudiandae, hic vel dolore expedita,
          voluptatum aut, eos quia.</p>
        <button @click="open(2)" class="btn btn-primary opening">learn more</button>
      </div>
    </div>
    <div class="padding col-md-3 col-sm-6 py-3 item selectable">
      <div class="services-card rounded background-admin d-flex justify-content-center align-items-center">
        <h4 class="readability"> Administration Solutions</h4>
        <p class="readability-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus eius
          fuga enim consequuntur molestias placeat eum id amet, suscipit at. Quidem soluta similique deleniti autem,
          nobis
          culpa non recusandae.</p>
        <button @click="open(3)" class="btn btn-primary opening">learn more</button>
      </div>
    </div>
    <div class="padding col-md-3 col-sm-6 py-3 item selectable">
      <div class="services-card rounded background-additional d-flex justify-content-center align-items-center">
        <h4 class="readability"> Additional Services</h4>
        <p class="readability-dark rounded">hello whats this</p>
        <button @click="open(4)" class="btn btn-primary opening">learn more</button>
      </div>
    </div>
    this is a test

  </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';





export default {
  setup() {
    const activeItem = ref({})
    return {
      activeItem,
      open(item) {
        activeItem.value = 1
      },
      close() {
        activeItem.value = null
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.services-card {
  height: 60dvh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.opening {
  visibility: hidden;
}

.background-testing {
  background-image: url('https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: fixed;
}

.background-admin {
  background-image: url('https://plus.unsplash.com/premium_photo-1661645494416-e47f4870a755?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: fixed;
}

.background-additional {
  background-image: url('https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: fixed;
}

.background-app {
  background-image: url('https://images.unsplash.com/photo-1611178673542-6277b00043bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: fixed;
}

.readability {
  text-shadow: 1px 1px 3px #111;
  color: antiquewhite;
  position: absolute;
  top: 32px;
  left: 20px;
  max-width: 100%;
}

.readability-dark {
  backdrop-filter: blur(30px);
  background: rgb(18 16 16 / 35%);
  visibility: hidden;
  color: antiquewhite;
  padding: 1em;
  margin: 1em;
}

.holder {

  .item {
    flex: 1;
    transition: all 1s ease-in-out;
    transition-delay: 100ms;
    position: relative;

    &:hover {
      flex-grow: 10;

      button {
        visibility: visible;
        position: absolute;
        bottom: 32px;
        right: 40px;
      }

      p {
        visibility: visible;
        transition-delay: 300ms;
      }
    }
  }


}

.custom-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 25vh;
}

.button-position {
  position: absolute;
  bottom: 15px;
  right: 50px;
}

.margin-bottom {
  margin-bottom: 3em;
}
</style>
