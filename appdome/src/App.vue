<template>
  <div class="app-container">
		<!-- 头部   header 区域-->
		<mt-header fixed title="在线商城app">
			<mt-button icon="back" slot="left" @click="goBtn()">返回</mt-button>
		</mt-header>
		
		<!-- 中间部分  content	 区域-->
		<transition>
			<router-view></router-view>
		</transition>
		
		
		<!-- 底部  footer 区域-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-all" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-all" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-all" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-all" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
	</div>
</template>

<script>
export default {
	methods: {
		goBtn(){
			this.$router.go(-1)
		}
	},
}
</script>

<style>
.app-container{
	padding-top: 3.3rem;
	padding-bottom: 5rem;
	overflow-x: hidden;
}
.mui-bar{
  -webkit-box-shadow: 0 0 1px rgba(204,204,204,.85);
  box-shadow: 0 0 1px rgba(204,204,204,.85);
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,.v-leave-active{
	transition: all 0.6s ease;
}


/* 更换tabbar的类名,解决tabbar不能切换的问题 */
.mui-bar-tab .mui-tab-item-all {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-all.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-all .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-all .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mint-header .mint-button{
	outline: none;
	background: none;
}

</style>
