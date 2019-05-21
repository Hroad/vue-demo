<template>
	<div>
		<div class="news-list">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="itme in newsList" :key='itme.id'>
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="itme.img_url">
						<div class="mui-media-body">
							<h3>{{ itme.title }}</h3>
							<p class='mui-ellipsis'>
								<span>发布时间：{{ itme.add_time | DateFromet }}</span>
								<span>点击：{{ itme.click }}次</span>
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';

	
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		created(){
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.$http.get('api/getnewslist').then(res =>{
					if(res.body.status === 0){
						// 成功执行
						this.newsList = res.body.message
					}else{
						// 失败执行
						Toast('获取新闻列表数据失败！');
					}
				})
			}
		},
	}
</script>

<style scoped="scoped">

	.mui-table-view h3{
		font-size: 0.6rem;
	}
	.mui-table-view-cell{
		padding: 1rem;
	}
	.mui-ellipsis{
		font-size: 0.1rem;
		color: #26A2FF;
		display: flex;
		justify-content: space-between;
	}
	
</style>
