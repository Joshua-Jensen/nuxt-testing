<template>

  <form @submit.prevent="test()" class="form-floating needs-validation row px-5" novalidate>

    <div class="col-6 mb-3 form-floating ">

      <input type="text" class="form-control " id="name" placeholder="Name" v-model="form.name">
      <label for="name" class="ms-2">Name</label>
    </div>

    <div class="col-6 mb-3 form-floating">
      <input type="email" class="form-control " id="email" placeholder="Email" v-model="form.email">
      <label for="email" class="ms-2">Email</label>

    </div>
    <div class="col-12 mb-5 form-floating">
      <input type="text" class="form-control " id="subject" placeholder="Subject" v-model="form.subject">
      <label class="ms-2" for="subject">Subject</label>
    </div>
    <div class="col-12 mb-5 form-floating">
      <textarea class="form-control message" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      <label for="floatingTextarea" class="ms-2">Message</label>
    </div>

    <div class="col-12">
      <button class="btn btn-primary" type="submit">Send Email</button>
    </div>

  </form>

</template>


<script>
import { computed, onMounted, ref } from 'vue';


export default {
  setup() {
    const form = ref({})
    return {
      form,
      async handleSubmit() {
        if (form.value.name && form.value.email && form.value.subject && form.value.message) {
          try {

            await $fetch('http://intellatek.net/assets/php/contact-form.php', {
              method: 'POST',
              body: {
                name: form.value.name,
                email: form.value.email,
                subject: form.value.subject,
                message: form.value.message
              }
            })
          }
          catch {
          }
        }

        console.log('does this work');
      },
      test() {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  min-height: 15vh;
}
</style>
