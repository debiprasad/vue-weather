<template>
  <form @submit.prevent="$router.push({ name: 'search', params: { keyword: keyword }})">
    <input type="text" name="keyword" v-model="keyword">
  </form>
</template>

<script>
export default {
  name: 'WeatherSearch',
  data: function () {
    return {
      keyword: ''
    }
  },
  mounted: function () {
    this.keyword = this.$route.params.keyword;
  }
}
</script>

<style scoped>
input {
  width: 300px;
  height: 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5em;
  font-weight: 700;
}
</style>