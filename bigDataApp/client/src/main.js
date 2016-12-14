import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueCharts from "vue-charts";
import VueRouter from 'vue-router'
import vueMaterial from "vue-material";
import Element from 'element-ui'
import router from "./router/router";
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.prototype.$axios = axios

Vue.use(vueCharts)
Vue.use(VueRouter)
Vue.use(Element)
Vue.use(vueMaterial)
Vue.material.theme.register('default', {
	primary: 'blue',
	accent: 'red'
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})