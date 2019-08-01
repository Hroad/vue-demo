<template>
	<div class="numbox">
		购买数量：
		<div class="mui-numbox" data-numbox-min='1'>
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
			<input id="test" class="mui-input-numbox" type="number" value="1" />
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
	</div>
	
</template>

<script>
	import mui from "../../bli/mui/dist/js/mui.min.js"
	export default{
		mounted() {
			mui(".mui-numbox").numbox()   //将numbox进行初始化
		},
	}
</script>

<style scoped="scoped">
	.numbox{
		font-size: 1.3rem;
	}
	.mui-numbox{
		height: 2.4rem;
	}
</style>
