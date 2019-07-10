<template>
	<div class="photo-container">
		<div class="photo-header">
			<h3 class="title">{{ photoInfo.title }}</h3>
			<div class="subtitle">
				<span>发表时间：{{ photoInfo.add_time | DateFromet }}</span>
				<span>点击：{{ photoInfo.click }}次</span>
			</div>
		</div>
		
		<div class="thumbns">
			<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
		</div>
		
		<div class="photo-content" v-html="photoInfo.content"></div>
		<cmt :id="id"></cmt>
	</div>
</template>

<script>
	// 导入mint-ui 的报错弹窗模块
	import { Toast } from 'mint-ui'
	
	// 导入评论子组件
	import comment from '../comment/comments.vue'
	
	export default{
		data() {
			return {
				id:this.$route.params.id,     //获取图片id
				photoInfo : {},      //图片详情页数据
				slide1:[]    //存放缩略图的地方
			}
		},
		created(){
			this.getPhotoInfo()
			this.getThumbns()
		},
		methods: {
			getPhotoInfo() {
				// 获取图片详情
				this.$http.get('api/getimageInfo/' + this.id).then(res => {
					if(res.body.status === 0){
						// 执行成功
						this.photoInfo = res.body.message[0]
					}else{
						// 执行失败
						Toast('获取新闻详情数据失败！');
					}
				})
			},
			getThumbns(){
				// 获取图片缩略图
				this.$http.get('api/getthumimages/' + this.id).then(res => {
					if(res.body.status === 0){
						// 执行成功
						res.body.message.forEach(itme => {
							itme.w = 600
							itme.h = 400
						})
						this.slide1 = res.body.message
					}else{
						// 执行失败
						Toast('获取新闻详情数据失败！');
					}
				})
			},
			handleClose () {
				console.log('close event')
			}
			
		},
		components: {   
			//注册评论子组件
			'cmt' : comment
		},
	}
	
</script>

<style scoped="scoped">
	.photo-container{
		padding: 1rem 0.5rem;
	}
	.photo-header{
		border-bottom: 2px solid #ACACB4;
		padding-bottom: 0.2rem;
		margin-bottom: 0.5rem;
	}
	.title{
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		color: #0062FF;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
	.subtitle{
		font-size: 1rem;
		color: #0062ff;
		display: flex;
		justify-content: space-between;
	}
	.photo-content{
		font-size: 1rem;
		line-height: 25px;
	}
	.photo-content img{
		width: 100%;
	}
</style>
