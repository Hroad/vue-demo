<template>
	
	<div class="index-warp">
		<div class="index-left">
			<div class="index-products">
				<h3>全部产品</h3>
				<div v-for="products in productsList">
					<h4> {{products.title}} </h4>
					<ul>
						<li v-for="item in products.list">
							<a :href="item.url" target="_blank">{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!products.last" class="hr"></div>
				</div>
				
			</div>
			<div class="index-news">
				<h3>最新消息</h3>
				<div class="news">
					<ul>
						<li v-for="items in newsList">
							<a :href="items.url" target="_blank">{{items.name}}</a>
							<span v-if="items.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
				</div>
			</div>
			
		</div>
		<div class="index-right">
			
			<slide-show :slides="slides" :Inv="slideTime"></slide-show>
			
			<div class="index-txt-box">
				<div class="txt-box" v-for="boxs in txtBox">
					<img :src="boxs.boxImgSrc" alt="图片">
					<div class="txt">
						<h3>{{ boxs.title }}</h3>
						<p>{{ boxs.introduction }}</p>
						<div class="btn">立即购买</div>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>
	
</template>

<script>
	import slideShow from '../components/slide.vue'
	export default {
		components:{
			slideShow
		},
		data() {
			return{
				slideTime:3000,
				slides:[
					{
						src:require('../assets/slideShow/pic1.jpg'),
						title:'xxx1',
						href:'http://www.baidu.com'
					},
					{
						src:require('../assets/slideShow/pic2.jpg'),
						title:'xxx2',
						href:'http://www.baidu.com'
					},
					{
						src:require('../assets/slideShow/pic3.jpg'),
						title:'xxx3',
						href:'http://www.baidu.com'
					},
					{
						src:require('../assets/slideShow/pic4.jpg'),
						title:'xxx4',
						href:'http://www.baidu.com'
					}
				],
				productsList:{
					pc:{
						title:'pc产品类',
						list:[
							{
								name:'数据统计',
								url:'http://starcraft.com'
							},
							{
								name:'数据预测',
								url:'http://warcraft.com'
							},
							{
								name:'流量分析',
								url:'http://overwatch.com',
								hot:true
							},
							{
								name:'广告发布',
								url:'http://hearstone.com'
							}
						]
					},
					app:{
						title:'手机应用类',
						last:true,
						list:[
							{
								name:'91助手',
								url:'http://weixin.com'
							},
							{
								name:'产品助手',
								url:'http://twitter.com'
							},
							{
								name:'智能地图',
								url:'http://maps.com',
								hot:true
							},
							{
								name:'团队语音',
								url:'http://phone.com'
							}
						]
					}
				},
				newsList:[
					{
						name:'数据统计',
						url:'http://starcraft.com'
					},
					{
						name:'数据预测',
						url:'http://warcraft.com'
					},
					{
						name:'流量分析',
						url:'http://overwatch.com',
						
					},
					{
						name:'广告发布',
						url:'http://hearstone.com',
						hot:true
					}
				],
				txtBox:[
					{
						title:'开放产品',
						introduction:'开放产品是一款开放产品',
						boxImgSrc:require('../assets/img/1.png'),
						salaout:false
					},
					{
						title:'品牌营销',
						introduction:'品牌营销能帮助你的产品更好的找到定位',
						boxImgSrc:require('../assets/img/3.png'),
						salaout:false
					},
					{
						title:'使命必达',
						introduction:'使命必达快速迭代永远保持最前端的速度',
						boxImgSrc:require('../assets/img/2.png'),
						salaout:false
					},
					{
						title:'勇攀高峰',
						introduction:'帮你勇闯高峰，到达事业的顶峰',
						boxImgSrc:require('../assets/img/4.png'),
						salaout:false
					}					
				]				
				
				
			}
		}
	}
</script>

<style scoped="scoped">
	.index-warp{
		width: 1200px;
		margin: 30px auto;
		overflow: hidden;
		color: #333;
	}
	.index-left{
		width: 300px;
		float: left;
	}
	.index-products{
		background: #fff;
	}
	.index-products h3{
		color: #fff;
		background: #41b883;
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		font-size: 16px;
		font-weight: bold;
	}
	.index-products h4{
		padding-left: 20px;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
	}
	.index-products ul li{
		padding-left: 20px;
		height: 30px;
		line-height: 30px;
	}
	.index-products ul li:last-child{
		padding-bottom: 15px;
	}
	.index-products ul li a{
		text-decoration: none;
		color: #333;
	}
	.hr{
		border-bottom: 2px solid #ccc;
	}
	
	.index-news{
		background: #fff;
		margin-top: 30px;
		padding-bottom: 15px;
	}
	.index-news h3{
		color: #fff;
		background: #41b883;
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.index-news ul li{
		padding-left: 20px;
		height: 30px;
		line-height: 30px;
	}
	.index-news ul li a{
		text-decoration: none;
		color: #333;
	}
	.hot-tag{
		background: #f00;
		color: #ff0;
		font-size: 12px;
		font-weight: bold;
		padding: 0 2px;
		margin-left: 5px;
	}

	.index-right{
		width: 880px;
		float: right;
	}
	
	.index-txt-box{
		overflow: hidden;
	}
	
	.txt-box{
		width: 390px;
		float: left;
		background: #fff;
		overflow: hidden;
		padding: 20px;
		margin: 10px;
	}
	.txt-box:nth-child(odd){
		margin-left: 0;
		margin-right: 10px;
	}
	.txt-box:nth-child(even){
		margin-right: 0;
	}
	.txt-box img{
		width: 100px;
		float: left;
	}
	.txt{
		width: 272px;
		float: right;
	}
	.txt h3{
		font-size: 20px;
		font-weight: bold;
	}
	.txt p{
		font-size: 14px;
		line-height: 30px;
		margin: 5px 0;
	}
	.txt .btn{
		width: 120px;
		height: 35px;
		line-height: 35px;
		background: #41B883;
		text-align: center;
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}
	
</style>
