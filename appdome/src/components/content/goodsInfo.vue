<template>
	<div class="goods-info">
		<transition @before-enter="bEnter" @enter="enter" @after-enter="aEnter">
			<div class="ball" v-show="ballFlag"></div>
		</transition>
		
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
			<div class="mui-card-header">{{ goodsInfo.title }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="price">
						<span class="old">市场价：<del>￥{{ goodsInfo.market_price }}</del></span>
						<span class="new">销售价：<span class="money">￥{{ goodsInfo.sell_price }}</span></span>
					</div>
					<numbox></numbox>
					<div class="btn">
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="DBallFlag">加入购物车</mt-button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{ goodsInfo.goods_no }}</p>
					<p>库存情况：{{ goodsInfo.stock_quantity }}</p>
					<p>上架时间：{{ goodsInfo.add_time | DateFromet }}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goDes(id)">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="goComments(id)">商品评论</mt-button>
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
				lunbo:[],   //保存轮播图数据
				goodsInfo:{},    //保存商品标题、价格数据   
				ballFlag:false,   //控制小球显示隐藏
			}
		},
		created(){
			this.getlunbo()
			this.getInfo()
		},
		methods: {
			getlunbo() {   //获取商品轮播图数据
				this.$http.get('api/getthumimages/' + this.id).then(res => {
					if(res.body.status === 0){
						this.lunbo = res.body.message
					}else{
						Toast('获取商品轮播图数据失败！');
					}
				})
			},
			getInfo(){    //获取商品标题、价格数据
				this.$http.get('api/goods/getinfo/' + this.id).then(res => {
					if(res.body.status === 0){
						this.goodsInfo = res.body.message[0]
					}else{
						Toast('获取商品标题、价格数据失败！');
					}
				})
			},
			goDes(id){
				// 使用编程式导航进行图文介绍的路由跳转
				this.$router.push({ name:'goodsDes', params:{ id } })
			},
			goComments(id){
				// 点击跳转到 评论页面
				this.$router.push({ name:'goodsComments', params:{ id } })
			},
			DBallFlag(){  
				// 控制小球显示隐藏
				this.ballFlag = !this.ballFlag
			},
			bEnter(el){
				el.style.transform = "translate(0,0)"
			},
			enter(el,done){
				el.offsetWidth;
				el.style.transform = "tarnslate(521px,203px)"
				el.style.transition = "all 1s ease"
				done()
			},
			aEnter(el){
				this.ballFlag = !this.ballFlag
			}
			
			
		},
		
		components: {
			'numbox':numbox
		},
	}
</script>

<style scoped="scoped" lang="less">
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
	
	.btn{
		margin-top: 0.8rem;
	}
	.mint-button--small{
		height: 2.3rem;
		font-size: 0.9rem;
		margin-right: 1rem;
	}
	
	.mui-card-footer{
		display: block;
		button{
			margin: 1.3rem 0;
		}
	}
	.mui-card-header{
		font-size: 1.4rem
	}
	
	.ball{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #f00;
		position: absolute;
		z-index: 99;
		top: 425px;
		left: 147px;
	}
	

	
</style>
