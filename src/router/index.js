import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* beautify preserve:start */

const Home = () => import(/* webpackChunkName: "Home" */ 'views/Home')

/* beautify preserve:end */

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }]
})
