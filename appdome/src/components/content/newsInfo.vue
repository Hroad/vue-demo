<template>
	<div class="news-container">
		<div class="news-header">
			<h3 class="title">{{ newsInfo.title }}</h3>
			<div class="subtitle">
				<span>发表时间：{{ newsInfo.add_time | DateFromet }}</span>
				<span>点击：{{ newsInfo.click }}次</span>
			</div>
		</div>
		
		<div class="news-content" v-html="newsInfo.content"></div>
		
		<!-- 评论子组件 -->
		<comment :id='this.id'></comment>
		
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
				id: this.$route.params.id,  //获取id
				newsInfo: {}   //获取新闻详情对象
			}
		},
		created(){
			this.getNewsInfo()
		},
		methods: {
			getNewsInfo() {
				this.$http.get('api/getnew/' + this.id).then(res => {
					if(res.body.status === 0){
						// 执行成功
						this.newsInfo = res.body.message[0]
		
					}else{
						// 执行失败
						Toast('获取新闻详情数据失败！');
					}
				})
			}
		},
		components: {
			'comment' : comment
		},
	}
</script>

<style>
	.news-container{
		padding: 1rem 0.5rem;
	}
	.news-header{
		border-bottom: 2px solid #ACACB4;
		padding-bottom: 0.2rem;
		margin-bottom: 0.5rem;
	}
	.title{
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		color: #f00;
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
	.news-content p{
		font-size: 1.3rem;
	}
	.news-content img{
		width: 100%;
	}
</style>
