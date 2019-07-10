<template>
	<div class="goods-info">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-swipe :auto="3000">
						<mt-swipe-item v-for="item in lunbo" :key="item.src">
							<img :src="item.src" />
						</mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-header">商品的标题</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="price">
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
				</div>
			</div>
			<div class="mui-card-footer">页脚</div>
		</div>
		
	</div>
</template>

<script>
	// 导入mint-ui 的报错弹窗模块
	import { Toast } from 'mint-ui'
	
	export default{
		data() {
			return {
				id:this.$route.params.id,    //将id挂载
				lunbo:[],
			}
		},
		created(){
			this.getlunbo()
		},
		methods: {
			getlunbo() {
				this.$http.get('api/getthumimages/' + this.id).then(res => {
					if(res.body.status === 0){
						this.lunbo = res.body.message
					}else{
						Toast('获取商品详情数据失败！');
					}
				})
			}
		},
	}
</script>

<style scoped="scoped">
	.goods-info{
		background: #eee;
		overflow: hidden;
	}
	.mint-swipe {
		height: 20.2rem;
	}
	.mint-swipe-item {
		text-align: center;
		color: #fff;
	}
	
	.mint-swipe-item img {
		width: auto;
		height: 100%;
	}
	.mui-card-content-inner .mint-swipe-indicator{
		background: #f00;
		opacity: 1;
	}
	.mint-swipe-indicator.is-active{
		background: #26a2ff;
	}
</style>
