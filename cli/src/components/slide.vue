<template>
	<div class="slide-show">
		
		<div class="slide-img" @mousemove="clearInv()" @mouseout="runInv()">
			<a :href="slides[nowIndex].href">
				<transition name="slide-trans">
					<img v-if="isShow" :src="slides[nowIndex].src" alt="banner图">
				</transition>
				<transition name="slide-trans-old">
					<img v-if="!isShow" :src="slides[nowIndex].src" alt="banner图">
				</transition>
			</a>
		</div>
		
		<div class="slide-bottom">
			<h3>{{ slides[nowIndex].title }}</h3>
			<ul class="slide-pages">
				<li @click="goto(prevIndex)">&lt;</li>
				<li v-for="(item, index) in slides" @click="goto(index)">
					<a :class="{on: index === nowIndex}">{{ index+1 }}</a>
					
				</li>
				<li @click="goto(nextIndex)">&gt;</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		props:{
			slides:{
				type:Array,
				default: []
			},
			Inv:{
				type:Number,
				default:'1000'
			}
		},
		data() {
			return {
				nowIndex:0,
				isShow:true
			};
		},
		methods:{
			goto(index){
				this.isShow=false
				setTimeout(()=>{
					this.isShow=true
					this.nowIndex=index
				},10)
				
			},
			runInv(){
				this.InvId = setInterval(()=>{
					this.goto(this.nextIndex)
				},this.Inv)
			},
			clearInv(){
				clearInterval(this.InvId)
			}
			
			
			
		},
		mounted(){
			this.runInv()
		},
		computed:{
			prevIndex(){
				if(this.nowIndex===0){
					return this.slides.length-1
				}else{
					return this.nowIndex-1
				}
			},
			nextIndex(){
				if(this.nowIndex===this.slides.length-1){
					return 0
				}else{
					return this.nowIndex+1
				}
			}
			
		}
	}
</script>

<style>
	.slide-show{
		width: 880px;
		height: 498px;
		overflow: hidden;
		position: relative;
	}
	.slide-img{
		width: 100%;
	}
	.slide-img img{
		width: 100%;
	}
	.slide-bottom{
		width: 100%;
		height: 30px;
		line-height: 30px;
		background: rgba(0,0,0,.5); 
		position: absolute;
		bottom: 4px;
		overflow: hidden;
	}
	.slide-bottom h3{
		
		color: #fff;
		float: left;
		padding-left: 20px;
	}
	.slide-pages{
		color: #fff;
		float: right;
		overflow: hidden;
		padding-right: 20px;
	}
	.slide-pages li{
		float: left;
		cursor: pointer;
	}
	.slide-pages li:first-child,.slide-pages li:last-child{
		width: 30px;
		text-align: center;
	}
	.slide-pages li:first-child:hover{
		background: #41B883;
		transition: 1s;
	}
	
	.slide-pages li a{
		display: inline-block;
		width: 30px;
		text-align: center;
		cursor: pointer;
	}
	.slide-pages li .on{
		background: #41B883;
		
	}
	
	.slide-trans-enter-active{
		transition: all 3s;
	}
	.slide-trans-enter{
		opacity: 0;
	}
	.slide-trans-old-leave-active{
		transition: all 3s;
		opacity: 1;
	}
	
	
</style>
