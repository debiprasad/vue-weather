<template>
  <div class="home">
    <img src="../assets/logo.png">
    <hr>
    <div v-for="city in cities">
    	<Weather :city="city"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'

export default {
  name: 'home',
  components: {
    Weather
  },
  data: function () {
  	return {
  		cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']
  	}
  }
}
</script>
