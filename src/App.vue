<template>
  <div id="app">
    <vue-city-picker placeholder="装货地" v-model="beginPlaces"></vue-city-picker>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        beginPlaces: []
      }
    }
  }
</script>

<style lang="scss">
  
</style>
