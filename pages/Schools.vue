<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img :src="school.img" alt="school image">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { appState } from "~/models/School";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute()
    const school = null
    onMounted(() => {
      findSchool()
    })
    function findSchool() {
      school = appState.schools.find(s => s.name == route.params.schoolId)

    }
    return {

      school,

    }
  }
}
</script>

<style lang="scss" scoped></style>
