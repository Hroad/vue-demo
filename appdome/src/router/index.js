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
import newsInfo from '../components/content/newsInfo.vue'
import photoList from '../components/content/photoList.vue'
import photoInfo from '../components/content/photoInfo.vue'
import goodsList from '../components/content/goodsList.vue'
import goodsInfo from '../components/content/goodsInfo.vue'
import goodsDes from '../components/comment/goodsDes.vue'
import goodsComments from '../components/comment/goodsComments.vue'

// 安装vue-resource
Vue.use(vueResource)
// 设置全局请求根目录
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置post表单提交数据格式
Vue.http.options.emulateJSON = true;

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
		{ path : '/home/newsInfo/:id' , component : newsInfo },
		{ path : '/home/photoList' , component : photoList },
		{ path : '/home/photoInfo/:id' , component : photoInfo },
		{ path : '/home/goodsList' , component : goodsList },
		{ path : '/home/goodsInfo/:id' , component : goodsInfo },
		{ path : '/home/goodsDes/:id' , component : goodsDes , name:'goodsDes' },
		{ path : '/home/goodsComments/:id' , component : goodsComments , name:'goodsComments' },
  ],
	linkActiveClass: 'mui-active'   //添加高亮的class类
})







