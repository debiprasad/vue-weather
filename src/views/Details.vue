<template>
  <div class="home">
    <router-link to="/">
      <img src="../assets/logo.png">
    </router-link>
    <hr>
    <Weather :woeid="$route.params.woeid"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'

export default {
  name: 'Details',
  components: {
    Weather
  }
}
</script>
