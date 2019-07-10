<template>
	<div class="goods-list">		
		<div @click="goodDetail(item.id)" class="good-itme" v-for="item in goodList" :key="item.id">
			<img :src="item.img_url" class="goods-thum">
			<div class="title">{{ item.title }}</div>
			<div class="good-box">
				<div class="price">
					<span class="new">￥{{ item.sell_price }}</span>
					<span class="old">￥{{ item.market_price }}</span>
				</div>
				<div class="txt">
					<span class="hot">热卖中</span>
					<span class="number">剩余{{ item.stock_quantity }}件</span>
				</div>
				
			</div>
		</div>
		
		<mt-button type="danger" size="large" class="goods-more" @click='getMore()'>加载更多</mt-button>
		
	</div>
</template>

<script>
	// 导入mint-ui 的报错弹窗模块
	import { Toast } from 'mint-ui'
	
	export default{
		data() {
			return {
				goodList:[],      //存放商品列表的数据
				indexpage:1       //分页的页数
			}
		},
		created(){
			this.getGoodList()
		},
		methods: {
			getGoodList(){
				this.$http.get('api/getgoods?indexpage=' + this.indexpage).then(res => {
					if(res.body.status === 0){
						// 成功执行
						this.goodList = this.goodList.concat(res.body.message)
					}else{
						// 失败执行
						Toast('获取商品列表数据失败！');
					}
				})
			},
			getMore(){    //实现加载更多
				this.indexpage ++
				this.getGoodList()
			},
			goodDetail(id){
				// 使用js的形式进行路由导航
				 this.$router.push('/home/goodsInfo/' + id);
			}
		},
	}
</script>

<style scoped="scoped">
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		padding: 0 0.6rem;
		justify-content: space-between;
	}
	.good-itme{
		width: 48%;
		box-shadow: 0 0 5px #ccc;
		border: 1px solid #ccc;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 18.5rem;
	}
	.goods-thum{
		width: 90%;
		margin: 1rem auto;
	}
	.title{
		font-size: 1rem;
		font-weight: bold;
		padding-left: 0.3rem;
	}
	.good-box{
		font-size: 0.5rem;
		padding: 0.3rem;
		background: rgba(0,0,0,.1);
		margin: 0 0.1rem 0.1rem;
		color: #9b9c9d;
	}
	.new{
		font-size: 1.5rem;
		color: #f00;
		font-weight: bold;
		margin-right: 0.8rem;
	}	
	.txt{
		display: flex;
		justify-content: space-between;
	}
	.old{
		text-decoration: line-through;       /*    //删除线 */
	}
	.goods-more{
		margin-top: 1rem;
	}	
	
</style>
