<template>
  <div class="home">
    <img src="../assets/logo.png">
    <WeatherSearch/>
    <hr>
    <div v-for="city in cities">
      <WeatherOfCity :city="city"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherOfCity from '@/components/WeatherOfCity.vue'
import WeatherSearch from '@/components/WeatherSearch.vue'

export default {
  name: 'home',
  components: {
    WeatherOfCity,
    WeatherSearch
  },
  data: function () {
    return {
      cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'],
    }
  }
}
</script>
