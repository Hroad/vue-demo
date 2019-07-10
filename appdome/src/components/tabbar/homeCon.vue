<template>
	<div>
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="banner in bannerList" :key="banner.id"><img :src="banner.src" :alt="banner.title" /></mt-swipe-item>
		</mt-swipe>
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/home/newsList">
						<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
						<div class="mui-media-body">新闻资讯</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/home/photoList">
						<span class="mui-icon mui-icon mui-icon-image"></span>
						<div class="mui-media-body">图片分享</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/home/goodsList">
						<span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
						<div class="mui-media-body">商品购买</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon mui-icon-compose"></span>
						<div class="mui-media-body">留言反馈</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon mui-icon-videocam"></span>
						<div class="mui-media-body">视频专区</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-phone"></span>
						<div class="mui-media-body">联系我们</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// banner轮播图数据
			bannerList: [
				{
					id: 1,
					src: require('../../img/banner1.jpg'),
					title: 'banner图1'
				},
				{
					id: 2,
					src: require('../../img/banner2.jpg'),
					title: 'banner图2'
				},
				{
					id: 3,
					src: require('../../img/banner3.jpg'),
					title: 'banner图3'
				}
			]
		};
	},
	methods: {}
};
</script>

<style>
body{
	background: none;
}
.mint-swipe {
	height: 14rem;
}
.mint-swipe-item {
	color: #fff;
}
.mint-swipe-item:first-child {
	background: #f00;
}
.mint-swipe-item:nth-child(2) {
	background: #ccc;
}
.mint-swipe-item:last-child {
	background: #00f;
}
.mint-swipe-item img {
	width: 100%;
	height: 100%;
	display: block;
}
.mint-swipe-indicator{
	background: #8699A4;
	opacity: 1;
}
.mint-swipe-indicator.is-active{
	background: #26a2ff;
}

.mui-grid-view.mui-grid-9{
	background: #fff;
	border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: 0;
}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon{
	font-size: 4rem;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	font-size: 0.4rem;
}


</style>
