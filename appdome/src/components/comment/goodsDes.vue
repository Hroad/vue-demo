<template>
	<div class="decsInfo">
		<div class="title">{{ info.title }}</div>
		
		<div class="content" v-html="info.content"></div>
		
	</div>
</template>

<script>
	// 导入mint-ui 的报错弹窗模块
	import { Toast } from 'mint-ui'
	
	export default{
		data() {
			return {
				info: {},   //保存图文介绍的数据
			}
		},
		created(){
			this.desInfo()
		},
		methods: {
			desInfo() {
				this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(res => {
					if(res.body.status === 0){
						this.info = res.body.message[0]
					}else{
						Toast('获取商品图文介绍数据失败！');
					}
				})
			}
		},
	}
</script>

<style lang="less">
	.decsInfo{
		padding: 0.5rem;
		.title{
			font-size: 1.3rem;
			border-bottom: 2px solid #bbb;
			color: #226aff;
			text-align: center;
			line-height: 2.8rem;
			font-weight: bold;
		}
		.content{
			margin-top: 1rem;
			img{
				width: 100%;
			}
			p{
				font-size: 1.1rem;
				line-height: 1.8rem;
			}
			
		}
	}
	
	
</style>
