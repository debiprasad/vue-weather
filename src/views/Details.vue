<template>
  <div class="details">
    <router-link to="/">
      <img src="../assets/logo.png">
    </router-link>
    <WeatherSearch/>
    <hr>
    <Weather :woeid="$route.params.woeid"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'
import WeatherSearch from '@/components/WeatherSearch.vue'

export default {
  name: 'Details',
  components: {
    Weather,
    WeatherSearch
  }
}
</script>
