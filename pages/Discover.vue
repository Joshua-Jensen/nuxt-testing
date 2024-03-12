<template>
  <div class="container-fluid discover">
    <DiscoverSchools />
      <!-- <DiscoverStaff /> -->
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';

import DiscoverSchools from '../components/DiscoverSchools.vue';
import DiscoverStaff from '../components/DiscoverStaff.vue';

export default {
  setup() {
    return {};
  },
  components: { DiscoverSchools, DiscoverStaff }
}
</script>


<style lang="scss" scoped>
.discover {
  background-color: #f4f4f4;
}
</style>