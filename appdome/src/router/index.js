import Vue from 'vue'
import Router from 'vue-router'

// 导入 vue-resource 
import vueResource from 'vue-resource'

// 导入tabbar路由页面组件
import homeCon from '../components/tabbar/homeCon.vue'
import memberCon from '../components/tabbar/memberCon.vue'
import shopcartCon from '../components/tabbar/shopcartCon.vue'
import searchCon from '../components/tabbar/searchCon.vue'
import newsList from '../components/content/newsList.vue'

// 安装vue-resource
Vue.use(vueResource)
// 设置全局请求根目录
Vue.http.options.root = 'http://www.liulongbin.top:3005';

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
			{ path : '/home/newsList' , component : newsList },
  ],
	linkActiveClass: 'mui-active'   //添加高亮的class类
})

// 定义全局时间过滤器
Vue.filter('DateFromet',function(){
	var dt = new Date()
	var y = dt.getFullYear()
	var m = (dt.getMonth() + 1).toString().padStart(2,'0')
	var d = dt.getDate().toString().padStart(2,'0')
	var hh = dt.getHours().toString().padStart(2,'0')
	var mm = dt.getMinutes().toString().padStart(2,'0')
	var dd = dt.getSeconds().toString().padStart(2,'0')
	return `${y}-${m}-${d} ${hh}:${mm}:${dd}`
	
})


