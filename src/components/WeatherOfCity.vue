<template>
  <div v-if="woeid">
    <Weather :woeid="woeid"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'
import axios from 'axios';

export default {
  name: 'WeatherOfCity',
  components: {
    Weather
  },
  props: {
    city: ''
  },
  data: function () {
    return {
      woeid: null
    }
  },
  mounted: function () {
    this.getWoeid();
  },
  methods: {
    getWoeid: function () {
      axios.get('https://metaweather.dev/weather.php?command=search&keyword=' + this.city)
        .then(response => {
          this.woeid = response.data[0].woeid;
        });
    }
  }
}
</script>
