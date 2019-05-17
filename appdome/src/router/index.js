import Vue from 'vue'
import Router from 'vue-router'

// 导入tabbar路由页面组件
import homeCon from '../components/tabbar/homeCon.vue'
import memberCon from '../components/tabbar/memberCon.vue'
import shopcartCon from '../components/tabbar/shopcartCon.vue'
import searchCon from '../components/tabbar/searchCon.vue'

Vue.use(Router)
export default new Router({
  routes: [    //路由配置
			// 路由重定向
			{ path : '/' , redirect : '/home' },
			// 配置tabbar路由
			{ path : '/home' , component : homeCon },
			{ path : '/member' , component : memberCon },
			{ path : '/shopcart' , component : shopcartCon },
			{ path : '/search' , component : searchCon },
  ],
	linkActiveClass: 'mui-active'   //添加高亮的class类
})
