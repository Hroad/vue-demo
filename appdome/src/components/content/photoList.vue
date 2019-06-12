<template>
	<div class="photo-container">
		<!-- 分类列表区域 -->
		<div class="photo-header">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',itme.id == 0 ? ' mui-active' : '']" v-for="itme in cates" :key="itme.id" @click="getAllPhotoList(itme.id)">
							{{ itme.title }}
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- 图片列表区域 -->
		<div class="photo-list">
			<ul>
			  <li v-for="item in list" :key="item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<div class="info-title">{{ item.title }}</div>
					<div class="info-txt">{{ item.zhaiyao }}</div>
				</div>
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>
	// 导入mui
	import mui from '../../bli/mui/dist/js/mui.min.js'
	
	export default{
		data() {
			return {
				cates:[],    //保存所有分类列表的数组
				list:[]    //保存所有图片列表的数组
			}
		},
		created(){
			this.getAllCate()
			this.getAllPhotoList(0)   //默认显示所有图片列表数据
		},
		mounted(){   //在dom结构渲染至页面时执行，解决 mui 在第一次顶部不能滑动问题
			// 初始化scroll控件
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods: {
			getAllCate(){   //获取所有分类列表数据
				this.$http.get('api/getimgcategory').then(res => {
					if(res.body.status === 0){
						res.body.message.unshift({"title":"全部","id":0})
						this.cates = res.body.message
					}
				})
			},
			getAllPhotoList(cateId){    //获取所有图片列表的数据
				this.$http.get('api/getimages/' + cateId).then(res => {
					if(res.body.status === 0){
						this.list = res.body.message
					}
				})
			}
		},
	}
</script>

<style>
	*{
		touch-action: pan-y;
		margin: 0;
		padding: 0;
	}
	.photo-header{
		position: fixed;
		background: #fff;
		box-shadow: 0px 1px 3px #C8C7CC;
		z-index: 3;
	}
	.mui-control-item{
		font-size: 1.3rem;
		font-weight: bold;
		
	}
	.mui-segmented-control.mui-scroll-wrapper .mui-control-item{
		padding: 0 12px;
	}
	
	/* 去除滑动分类列表的z-index层级,解决滑动分类列表在滑动内容时覆盖标题 */
	.mui-slider,.mui-scroll-wrapper,.mui-scroll{
		z-index: initial;
	}
	
	/* 图片懒加载样式 */
	.photo-list{
		padding-top: 4.5rem;
	}
	.photo-list ul li{
		list-style-type: none;
		text-align: center;
		width: 95%;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		margin-bottom: 1rem;
	}
	.photo-list ul li img{
		box-shadow: 0 0 6px #ccc;
		border-radius: 5px;
		vertical-align: middle;
	}
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	
	.info{
		width: 99%;
		margin: 0 auto;
		color: #fff;
		background: rgba(0,0,0,.5);
		text-align: left;
		line-height: 1.5rem;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		height: 6.5rem;
		padding: 0.3rem 0.5rem;
	}
	.info-title{
		font-size: 0.5rem;
		font-weight: bold;
	}
	.info-txt{
		font-size: 0.5rem;
	}
	
</style>
