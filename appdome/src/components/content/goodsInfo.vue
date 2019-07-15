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
						<span class="old">市场价：<del>￥2500</del></span>
						<span class="new">销售价：<span class="money">￥1500</span></span>
					</div>
					<numbox></numbox>
					<mt-buttom></mt-buttom>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：</p>
					<p>库存情况：</p>
					<p>上架时间：</p>
				</div>
			</div>
			<div class="mui-card-footer">
				
			</div>
		</div>
		
	</div>
</template>

<script>
	// 导入mint-ui 的报错弹窗模块
	import { Toast } from 'mint-ui'
	import numbox from '../comment/numbox.vue'
	
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
		
		components: {
			'numbox':numbox
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
	.mui-card .mui-card-content-inner .mint-swipe-indicator{
		background: #f00;
		opacity: 1;
	}
	.mui-card .mint-swipe-indicator.is-active{
		background: #26a2ff;
	}
	.price{
		margin-bottom: 0.5rem;
	}
	.price span{
		color: #6D6D72;
		font-size: 1.3rem;
	}
	.price span{
		margin-right: 2.5rem;
	}
	.price .money{
		color: #f00;
		font-weight: bold;
		font-size: 1.5rem;
	}
	
</style>
