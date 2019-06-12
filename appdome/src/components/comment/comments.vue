<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<textarea placeholder="请输入想要BB的内容(最多BB内容为120字)" maxlength="120"></textarea>
		<mt-button type="primary" class="fbtn" @click='PostComment()'>发表评论</mt-button>
		
		<div class="cmt-txt" v-for="(itme,i) in comments" :key='itme.add_time'>
			<div class="cmt-title">
				第{{ i+1 }}楼&nbsp;
				用户：{{ itme.user_name }}&nbsp;
				发表时间：{{ itme.add_time | DateFromet }}
			</div>
			<div class="cmt-content">
				{{ itme.content == '' ? '该用户真懒，嘛都不写' : itme.content }}
			</div>
		</div>
		
		<mt-button type="danger" plain class="jbtn" @click='getMore()'>加载更多</mt-button>
	
	</div>
</template>

<script>
	// 导入mint-ui的错误弹窗模块
	import { Toast } from 'mint-ui'
	
	export default{
		data() {
			return {
				pageindex:1,    //默认显示第一页评论数据
				comments:[]    //获取评论数据
			}
		},
		created(){
			this.getComment()
		},
		methods: {
			getComment(){   //获取评论数据
				this.$http.get('api/getcomments/'+ this.id +'?pageindex=' + this.pageindex ).then(res => {
					if(res.body.status === 0){
						// 成功执行
						// this.comments = res.body.message
						
						// 将新数据与老数据合并为一个新数组   concat()  合并数组
						this.comments = this.comments.concat(res.body.message)
						
					}else{
						// 失败执行
						Toast('获取评论数据失败')
					}
				})
			},
			getMore(){    //实现加载更多
				this.pageindex ++
				this.getComment()
			},
			PostComment(){
				if(this.msg.trim().length === 0){
					return Toast('评论内容不能为空！')
				}
				this.$http.post('api/postcomment/' + this.id,{content:this.msg.trim()}).then(res => {
					if(res.body.status === 0){
						// 成功执行
						var cmt = {
							user_name:'匿名用户',
							add_time:Data.now(),
							content:this.msg.trim()
						}
						this.comments.unshift(cmt)
						this.msg = ''
					}else{
						// 失败执行
						Toast('发表评论失败')
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
		font-size: 1.5rem;
		height: 2.7rem;
		line-height: 2.7rem;
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
