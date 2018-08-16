import 'iview/dist/styles/iview.css';
import '../node_modules/normalize.css/normalize.css';
import './css/global.css'

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import iView from 'iview';

import Home from './page/Home';
import Me from './page/Me';
import Login from './page/Login';



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home },
    {path: '/me', component: Me },
    {path: '/login', component: Login },
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
