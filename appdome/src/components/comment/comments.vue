<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<textarea placeholder="请输入想要BB的内容(最多BB内容为120字)" maxlength="120"></textarea>
		<mt-button type="primary" class="fbtn">发表评论</mt-button>
		
		<div class="cmt-txt" v-for="(itme,i) in comments" :key='itme.add_time'>
			<div class="cmt-title">
				第{{ i+1 }}楼&nbsp;
				用户：{{ itme.user_name }}&nbsp;
				发表时间：{{ itme.add_time | DateFromet }}
			</div>
			<div class="cmt-content">
				{{ itme.content == 'undefined' ? '该用户真懒，嘛都不写' : itme.content }}
			</div>
		</div>
		
		<mt-button type="danger" plain class="jbtn">加载更多</mt-button>
	
	</div>
</template>

<script>
	// 导入mint-ui的错误弹窗模块
	import { Toast } from 'mint-ui'
	
	export default{
		data() {
			return {
				pageindex:1,    //默认显示第一页评论数据
				comments:[]   //获取评论数据
			}
		},
		created(){
			this.getComment()
		},
		methods: {
			getComment(){
				this.$http.get('api/getcomments/'+ this.id +'?pageindex=' + this.pageindex ).then(res => {
					if(res.body.status === 0){
						// 成功执行
						this.comments = res.body.message
					}else{
						// 失败执行
						Toast('获取评论数据失败')
					}
				})
			}
		},
		props: ['id']
	}
</script>

<style>
	.cmt-container{
		margin-top: 2rem;
	}
	.cmt-container h3{
		font-size: 1.7rem;
		border-bottom: 2px solid #C2CCD1;
		padding-bottom: 0.5rem;
	}
	.cmt-container textarea{
		font-size: 1rem;
		height: 6rem;
		margin: 0;
	}
	.fbtn,.jbtn{
		display: block;
		width: 100%;
	}
	.cmt-txt{
		font-size: 1rem;
		line-height: 2.5rem;
		margin-top: 0.5rem;
	}
	.cmt-title{
		background: #C0C0C0;
	}
	.cmt-content{
		text-indent: 2em;
	}
	
</style>
