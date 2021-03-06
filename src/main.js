import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './libs/global'
import './libs/filters'
import './libs/element'

Vue.config.productionTip = false
Vue.use(global)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
