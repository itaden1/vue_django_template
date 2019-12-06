import Vue from 'vue'
import VueRouter from 'vue-router'
import Basic from '../components/Basic'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
    { path: '/basic', component: Basic },
    { path: '/hello-world', component: HelloWorld }
]

export default new VueRouter({
    routes
})
