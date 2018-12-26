// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入vue模块
import vueRouter from 'vue-router'
//引入vue-router组件
import vueResource from 'vue-resource'

import reset from './css/reset.min.css'
import layout from './components/layout.vue'
import IndexPage from './pages/index.vue'
import DateilPage from './pages/dateil.vue'
import countPage from './pages/dateilPage/count.vue'
import forecastPage from './pages/dateilPage/forecast.vue'
import analysisPage from './pages/dateilPage/analysis.vue'
import publishPage from './pages/dateilPage/publish.vue'



Vue.config.productionTip = false
//关闭生产模式下给出的提示

Vue.use(vueRouter)
Vue.use(vueResource)

const router = new vueRouter({
		mode:'history',
		routes:[
			{
				path:'/',
				component:IndexPage,
			},
			{
				path:'/dateil',
				component:DateilPage,
				redirect:'/dateil/count',
				children:[
					{
						path:'/dateil/count',
						component:countPage,
					},
					{
						path:'/dateil/forecast',
						component:forecastPage,
					},
					{
						path:'/dateil/analysis',
						component:analysisPage,
					},
					{
						path:'/dateil/publish',
						component:publishPage,
					}
				]
			},
		]
})




/* eslint-disable no-new */
new Vue({
//	创建一个vue的根实例
  el: '#app',
  //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
	router,
  template: '<layout/>',
  //配置根模板 即打开页面显示那个组件
  components: { layout }
  // 注入组件
})
