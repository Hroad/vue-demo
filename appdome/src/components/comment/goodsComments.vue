<template>
	<div class="comtxt">
		<cmtbox :id="$route.params.id"></cmtbox>
	</div>
</template>

<script>
	// 导入评论组件
	import cmtbox from '../comment/comments.vue'
	
	export default{
		components: {
			cmtbox
		},
	}	
</script>

<style scoped="scoped" lang="less">
	.comtxt{
		padding: 0.8rem;
	}
</style>
