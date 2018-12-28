<template>
	<div class="chooser-component">
        <ul class="chooser-list">
          <li
		   v-for="(item,index) in checkBtn"
		   :title="item.lable"
		   @click="toggleCheck(index)"
		   :class="{active:checkActive(index)}"
		   >{{ item.lable }}</li>
        </ul>
		
		
		
      </div>
    </div>
</template>

<script>
	import _ from "lodash"
	export default {
		props: {
			checkBtn: {
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
				nowIndexs:[0]
			};
		},
		methods: {
			toggleCheck(index){
				if(this.nowIndexs.indexOf(index)===-1){
					this.nowIndexs.push(index)
				}else{
					this.nowIndexs=_.remove(this.nowIndexs,(idx)=>{
						return idx!==index
					})
				}
				this.$emit('on-change',this.nowIndexs)
			},
			checkActive(index){
				return this.nowIndexs.indexOf(index)!==-1
			}
		},
	}
</script>

<style scoped="scoped">
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
