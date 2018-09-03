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
import Signup from './page/Signup';
import Publisher from './page/Publisher';
import Chat from './page/Chat';
import ExploreBase from './page/explore/Base';
import Explore from './page/explore/Explore';
import People from './page/explore/People';




Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
  routes: [
    { path: '/view', component: Home },
    { path: '/me', component: Me },
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/publisher/:id', component: Publisher },
    { path: '/people', component: People },
    { path: '/chat', component: Chat },
    { path: '/explore', 
      component: ExploreBase,
      children: [
          { path: '', component: Explore},
          { path: 'people', component: People},
        ],
     },
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
