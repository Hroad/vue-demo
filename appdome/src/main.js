// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入vue模块
import App from './App'
//引入vue组件
import router from './router'
//引入路由配置文件

// 引入normalize.css
import normalize from 'normalize.css'


// 按需导入 mint-ui 的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



// 引入 mui 组件
import './bli/mui/dist/css/mui.min.css'
// 引入 mui 扩展字体图标
import './bli/mui/dist/css/icons-extra.css'
import './bli/mui/dist/fonts/mui-icons-extra.ttf'

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

// 导入vue-preview缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false
//关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
//	创建一个vue的根实例
  el: '#app',
  //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router,
  // 注入路由配置。
  template: '<App/>',
  //配置根模板 即打开页面显示那个组件
  components: { App }
  // 注入组件
})
