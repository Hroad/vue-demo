<template>
	<div class="chooser-component">
        <ul class="chooser-list">
          <li 
		  v-for="(itme,index) in radioBtn" @click="chooseSelections(index)"
		  :title="itme.lable" :class="{active:index===nowIndex}"
		  >{{itme.lable}}</li>
        </ul>
      </div>
    </div>
</template>

<script scoped>
	export default {
		props: {
			radioBtn: {
				type: Array,
				default: [
					{
						lable:'test',
						value:0
					},
				],
			},
		},
		data() {
			return {
				nowIndex:0,
			};
		},
		methods: {
			chooseSelections(index){
				this.nowIndex=index,
				this.$emit('on-change',this.nowIndex)
			}
		},
	}
</script>

<style>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
