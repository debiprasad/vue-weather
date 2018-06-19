<template>
  <div v-if="temperature">
    <div class="weather">
      <h1>{{ city }}</h1>
      <div v-if="$route.params.woeid">
        <h2>Today</h2>
      </div>
      <h2>{{ Math.round(temperature) }}</h2>
      <h3>Max: {{ Math.round(maxtemp) }}</h3>
      <h3>Min: {{ Math.round(mintemp) }}</h3>
      <img :src="weathericon" width="100">
      <div v-if="$route.params.woeid">
        <div v-for="weather in consolidatedWeather">
          <hr>
          <h2>{{ moment(weather.applicable_date).format("ddd") }}</h2>
          <h2>{{ Math.round(weather.the_temp) }}</h2>
          <h3>Max: {{ Math.round(weather.max_temp) }}</h3>
          <h3>Min: {{ Math.round(weather.min_temp) }}</h3>
          <img :src="'https://www.metaweather.com//static/img/weather/' + weather.weather_state_abbr + '.svg'" width="100">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

var moment = require('moment');

export default {
  name: 'Weather',
  props: {
    woeid: null
  },
  data: function () {
    return {
      city: '',
      temperature: null,
      maxtemp: null,
      mintemp: null,
      weathericon: null,
      consolidatedWeather: [],
      moment: moment
    }
  },
  mounted: function () {
    this.getWeather();
  },
  methods: {
    getWeather: function () {
      axios.get('https://metaweather.dev/weather.php?command=location&woeid=' + this.woeid)
        .then(response => {
          this.city = response.data.title;
          this.temperature = response.data.consolidated_weather[0].the_temp;
          this.maxtemp = response.data.consolidated_weather[0].max_temp;
          this.mintemp = response.data.consolidated_weather[0].min_temp;
          this.weathericon = 'https://www.metaweather.com//static/img/weather/' + response.data.consolidated_weather[0].weather_state_abbr + '.svg';

          this.consolidatedWeather = response.data.consolidated_weather;
          this.consolidatedWeather.shift();
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
.weather h1, .weather h2, .weather h3 {
  color: #2c3e50;
  text-decoration: none;
}
hr {
  width: 80%;
}
</style>