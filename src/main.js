// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from './views/goods/goods.vue';
import Ratings from './views/ratings/ratings.vue';
import Seller from './views/seller/seller.vue';
import './common/style/index.scss';
import api from './common/api';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$api = api;
const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller },
  { path: '*', component: Seller }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

export {app, router, App};
