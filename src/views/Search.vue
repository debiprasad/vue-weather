<template>
  <div class="search">
    <router-link to="/">
      <img src="../assets/logo.png">
    </router-link>
    <WeatherSearch/>
    <hr>
    <div v-for="city in cities">
      <router-link :to="'/weather/' + city.woeid">
        <Weather :woeid="city.woeid"/>
      </router-link>
    </div>
    <div v-if="cities.length === 0">
      <h3>No results were found. Try changing the keyword!</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'
import WeatherSearch from '@/components/WeatherSearch.vue'
import axios from 'axios';

export default {
  name: 'Search',
  components: {
    Weather,
    WeatherSearch
  },
  data: function () {
    return {
      cities: []
    }
  },
  mounted: function () {
    this.search();
  },
  watch: {
    '$route' (to, from) {
      this.search();
    }
  },
  methods: {
    search: function () {
      axios.get('https://metaweather.dev/weather.php?command=search&keyword=' + this.$route.params.keyword)
        .then(response => {
          this.cities = response.data;
        });
    }
  }
}
</script>
