<template>
  <div class="home">
    <img src="../assets/logo.png">
    <hr>
    <Weather city="Istanbul"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'

export default {
  name: 'home',
  components: {
    Weather
  }
}
</script>
