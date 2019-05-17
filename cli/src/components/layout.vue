<template>
	<div>
		<div class="app-header">
			<div class="log-nav">
				<router-link :to="{path:'/'}">
					<img src="../assets/logo.png" alt="logo" class="logo">
				</router-link>

				<div class="nav">
					<ul class="nav-list">
						<li v-if="username!==''">{{username}}</li>
						<li v-if="username!==''">退出</li>
						<li @click="logClick" v-if="username===''">登录</li>
						<li @click="regClick" v-if="username===''">注册</li>
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
			<p class="about-gy">本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
			
		</my-dialog>
		<my-dialog :is-show='isShowLogDialog' @on-close='closeDialog("isShowLogDialog")'>
			<login-from @has-log='successLog'></login-from>
		</my-dialog>
		<my-dialog :is-show='isShowRegDialog' @on-close='closeDialog("isShowRegDialog")'>
			<res-from></res-from>
		</my-dialog>
		
	</div>
</template>

<script>
	
	import Dialog from './bash/dialog.vue'
	import LoginFrom from './bash/login.vue'
	import ResFrom from './bash/registered.vue'
	
	
	export default {
		components:{
			myDialog:Dialog,
			LoginFrom,
			ResFrom,
		},
		data() {
			return {
				isShowDialog:false,
				isShowLogDialog:false,
				isShowRegDialog:false,
				username:''
				
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
			},
			successLog(data){
				console.log(data)
				this.closeDialog(isShowLogDialog)
				this.username = data.username
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
	.log-name{
		margin-bottom:26px;
	}
	.log-name span,.log-pas span{
		font-size: 16px;
		font-weight: bold;
		color: #41b883;
	}
	.log-name input,.log-pas input{
		width:200px;
		height: 25px;
		line-height: 25px;
		padding-left: 10px;
		outline: none;
		border: 2px solid #41b883;
		color: #333;
	}
	.log-btn{			width: 80px;
		height: 35px;
		line-height: 35px;
		background: #41b883;
		color: #fff;
		cursor: pointer;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		letter-spacing: 2px;
		margin-top:26px;
		margin-left: 20px;
	}
	.log-name .g-error,.log-pas .g-error{
		color: #FF0000;
		padding-left: 10px;
	}
	.about-gy{
		text-indent: 2em;
		color: #333333;
		line-height: 30px;
	}
</style>
