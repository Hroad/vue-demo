<template>
	<div class="login-from">
		<div class="login">
			<div class="log-name">
				<span class="log-label">用户名：</span>
				<input type="text" v-model="usernameModel" placeholder="请输入用户名" />
				<span class="g-error">{{ userErrors.errorText }}</span>
			</div>
			<div class="log-pas">
				<span class="log-label">密&nbsp;&nbsp;&nbsp;码：</span>
				<input type="password" v-model="passwordModel" placeholder="请输入密码" />
				<span class="g-error">{{ pasErrors.errorText }}</span>
			</div>
			<div class="log-btn" @click="onLogin">登录</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				usernameModel:'',
				passwordModel:''
			};
		},
		computed: {
			userErrors() {
				let errorText,status
				if(!/@/g.test(this.usernameModel)){
					status = false
					errorText = '用户名格式不正确，请输入包含@的用户名'
				}else{
					status = true
					errorText = '✔'
				}
				if(!this.userFlag){
					errorText = ''
					this.userFlag = true
				}
				return{
					status,
					errorText
				}
			},
			pasErrors() {
				let errorText,status
				if(!/^\w{1,6}$/g.test(this.passwordModel)){
					status = false
					errorText = '密码格式不正确，请输入1-6位的密码'
				}else{
					status = true
					errorText = '✔'
				}
				if(!this.pasFlag){
					errorText = ''
					this.pasFlag = true
				}
				return{
					status,
					errorText
				}
			},
			
		},
		methods: {
			onLogin() {
				if(!this.userErrors.status || !this.pasErrors.status){
					alert('用户名或密码格式错误!')
				}else{
					alert('登录成功！')
					this.$http.post('api/login')
					.then((res) => {
						this.$emit('has-log', res.data)
					}, (error) => {
						console.log(error)
					})
				}
				
				

			}
		},
	}
</script>

<style>
	
</style>
