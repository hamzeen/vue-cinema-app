<template>
  <div class="home">
    <CinemaSeating msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CinemaSeating from '@/components/CinemaSeating.vue'

export default {
  name: 'Home',
  components: {
    CinemaSeating
  }
}
</script>
