import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    uploadSta: 0
  },
  mutations: {
    changeUpload (state) {
      state.uploadSta++;
    }
  }
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(ElementUI, {
	size: SVGAnimatedLengthList,
	zIndex: 3000
})

import {
	get
} from "./request/http.js";
import {
	post
} from "./request/http.js";
Vue.prototype.get = get;
Vue.prototype.post = post;

//Router
import Index from "./components/Index.vue"
import Mis from "./components/Mis.vue"
import MisSchemeList from "./components/MisSchemeList.vue"
const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Index,
		},
		{
			path: '/mis',
			component: Mis
		},
		{
			path: '/misschemelist',
			component: MisSchemeList
		}]
})



Vue.config.productionTip = false


new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app')
