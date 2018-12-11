<template>
	<div>
		<div class="app-header">
			<div class="log-nav">
				<img src="../assets/logo.png" alt="logo" class="logo">
				<div class="nav">
					<ul class="nav-list">
						<li @click="logClick">登录</li>
						<li @click="regClick">注册</li>
						<li @click="aboutClick">关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<p>@ 2018 fishenal MIT</p>
		</div>
		
		<my-dialog :is-show='isShowDialog' @on-close='closeDialog("isShowDialog")'>
			<p>holle About us</p>
		</my-dialog>
		<my-dialog :is-show='isShowLogDialog' @on-close='closeDialog("isShowLogDialog")'>
			<p>Welcome to the login page</p>
		</my-dialog>
		<my-dialog :is-show='isShowRegDialog' @on-close='closeDialog("isShowRegDialog")'>
			<p>Welcome to the registration page</p>
		</my-dialog>
		
	</div>
</template>

<script>
	import Dialog from './bash/dialog.vue'
	export default {
		components:{
			myDialog:Dialog
		},
		data() {
			return {
				isShowDialog:false,
				isShowLogDialog:false,
				isShowRegDialog:false
				
			};
		},
		methods:{
			aboutClick(){
				this.isShowDialog = true
			},
			logClick(){
				this.isShowLogDialog = true
			},
			regClick(){
				this.isShowRegDialog = true
			},
			closeDialog(attr){
				this[attr] = false 
			}
		}
	}
</script>

<style>
	html,body{
		min-width: 1280px;
		width: 100%;
		margin: 0 auto;
		font-family: '微软雅黑' !important; 
		background: #f0f2f5;
		color: #444;
		font-size: 14px;
	}
	a{
		text-decoration: none !important;
	}
	
	.app-header{
		min-width: 1280px;
		width: 100%;
		background: #363636;
		color: #b2b2b2;
		height: 70px;
		line-height: 70px;
	}
	.log-nav{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
	.logo{
		width: 50px;
		margin-top: 10px;
		float: left;
	}
	
	.nav{
		width: 300px;
		float: right;
	}
	.nav-list{
		overflow: hidden;
		margin-top: 20px;
	}
	.nav-list li{
		width: 99px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		float: left;
		cursor: pointer;
		border-right: 1px solid #b1b1b1;
		font-size: 16px;
	}
	.nav-list li:last-child{
		border: 0;
	}
	.app-content{
		min-width: 1280px;
		width: 100%;
		margin: 0 auto;
	}
	.app-footer{
		min-width: 1280px;
		width: 100%;
		margin: 0 auto;
		padding: 20px 0;
		background: #ccc;
		text-align: center;
		font-size: 16px;
		
	}
	
</style>
