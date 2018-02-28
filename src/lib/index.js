import tbxCityPicker from './tbx-city-picker.vue'
const cityPicker = {
    install(Vue, options) {
        Vue.component(tbxCityPicker.name, tbxCityPicker)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(cityPicker);
}
export default cityPicker