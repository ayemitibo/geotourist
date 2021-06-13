import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Media from './views/Media.vue'
import Metro from './views/Metro.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/media',
        component: Media
    },
    {
        path: '/metro',
        component: Metro
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router