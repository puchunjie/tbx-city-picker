import vueCityPicker from './vue-city-picker.vue'
const cityPicker = {
    install(Vue, options) {
        Vue.component(vueCityPicker.name, vueCityPicker)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(cityPicker);
}
export default cityPicker