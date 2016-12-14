import VueRouter from 'vue-router'
import Home from "../components/Home.vue";
import FoodCharts from "../components/FoodCharts.vue";
import ProlineCharts from "../components/ProlineCharts.vue";
import ShopCharts from "../components/ShopCharts.vue";
import Found404 from "../components/Found404.vue";
import Login from "../components/Login.vue";
import Index from "../components/Index.vue";
export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    redirect: {
      name: 'home'
    },
    children: [{
      name: 'home',
      path: 'home',
      component: Home
    }, {
      name: 'shop',
      path: 'shop',
      component: ShopCharts
    }, {
      name: 'food',
      path: 'food',
      component: FoodCharts
    }, {
      name: 'proline',
      path: 'proline',
      component: ProlineCharts
    }]
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }, {
    name: 'found404',
    path: '*',
    component: Found404
  }]
})