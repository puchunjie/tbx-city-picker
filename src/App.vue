<template>
  <div id="app">
    <tbx-city-picker placeholder="装货地" v-model="beginPlaces"></tbx-city-picker>
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
