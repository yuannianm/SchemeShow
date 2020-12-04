import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(ElementUI, {
	size: SVGAnimatedLengthList,
	zIndex: 3000
})

//全局模块
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
	// 其组件目录的相对路径
	'./components',
	// 是否查询其子目录
	true,
	// 匹配基础组件文件名的正则表达式
	/Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
	// 获取组件配置
	const componentConfig = requireComponent(fileName)

	// 获取组件的 PascalCase 命名
	const componentName = upperFirst(
		camelCase(
			// 获取和目录深度无关的文件名
			fileName
			.split('/')
			.pop()
			.replace(/\.\w+$/, '')
		)
	)

	// 全局注册组件
	Vue.component(
		componentName,
		// 如果这个组件选项是通过 `export default` 导出的，
		// 那么就会优先使用 `.default`，
		// 否则回退到使用模块的根。
		componentConfig.default || componentConfig
	)
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
import Mis from "./components/Mis.vue"
import MisCase from "./components/MisCase.vue"
const router = new VueRouter({
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/mis',
			component: Mis
		},
		{
			path: '/miscase',
			component: MisCase
		}
	]
})

//Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

//x2js
import x2js from 'x2js'
Vue.prototype.$x2js = new x2js()

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
