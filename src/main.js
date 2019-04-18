// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js';
import storage from './server/storage';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import './components/Toast/index.css';
import Toast from './components/Toast/index';
Vue.use(Toast);

Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  //document.title = to.meta.title;
	if(store)store.dispatch('wxSetShare',{link:to.path});
	
  var mToken = storage.get('msdWebToken'); 
  if (!mToken) {
    if (to.path === '/author') {
      next();
    } else {
			storage.set('authorUrl',to.fullPath);
      //next('/author');
			next();
    }
  } else {
		storage.set('authorUrl','/');
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
