import Vue from 'vue'
import App from './App.vue'
import tbxCityPicker from './lib/index.js'

Vue.use(tbxCityPicker)



new Vue({
    el: '#app',
    render: h => h(App)
})