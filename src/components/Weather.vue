<template>
  <div class="weather">
    <h1>{{ city }}</h1>
    <div v-if="temperature">
      <h2>{{ temperature }}</h2>
      <h3>Max: {{ maxtemp }}</h3>
      <h3>Min: {{ mintemp }}</h3>
      <img :src="weathericon" width="100">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Weather',
  props: {
    city: '',
    woeid: null
  },
  data: function () {
    return {
      temperature: null,
      maxtemp: null,
      mintemp: null,
      weathericon: null
    }
  },
  mounted: function () {
    this.getWeather();
  },
  methods: {
    getWeather: function () {
      axios.get('https://metaweather.dev/weather.php?command=location&woeid=' + this.woeid)
        .then(response => {
          this.temperature = response.data.consolidated_weather[0].the_temp;
          this.maxtemp = response.data.consolidated_weather[0].max_temp;
          this.mintemp = response.data.consolidated_weather[0].min_temp;
          this.weathericon = 'https://www.metaweather.com//static/img/weather/' + response.data.consolidated_weather[0].weather_state_abbr + '.svg';
        });        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather {
  border: 1px solid #333333;
  margin: 20px auto 40px;
  width: 300px;
}
</style>