<template>
	<div class="container" ref="myScroll" @scroll.passive="onScroll($event)">
		<slot name='scrollList'></slot>
		<div :class="{'scroll-bottom':true,'scroll-bot-h':bheight}">
			<div v-if="state==1" class="scroll-bottom-div">
				<img src="../../assets/bars.svg" class="scroll-bottom-img" />
				<span class="scroll-bottom-text">加载中……</span>
			</div>
			<div v-else-if="state==2" class="scroll-bottom-div">
				<span class="scroll-bottom-text">－－－我是有底线的－－－</span>
			</div>
			<div v-else class="scroll-bottom-div"></div>
		</div>
	</div>
</template>

<script>
	import indList from '@/components/temp/indList.vue';
	export default {
		props:{
			'onPull':{
                type:Function,
                require:true
            },
			'state':{},
			'bheight':{}
		},
		data () {
			return {
				myScroll:null,
				myScrollList:null,
			}
		},
		components:{
			indList
		},
		mounted(){
			var self = this;
			this.myScroll = this.$refs.myScroll;
			this.myScrollList = this.myScroll.children[0];
		},
		methods: {
			onScroll(e) {
				let listHeight = this.myScrollList.offsetHeight //列表总高度
				let listScrollTop = e.target.scrollTop + this.myScroll.offsetHeight //当前滚动条位置
				if(this.state == 0 && listHeight-listScrollTop < 100){
					this.updataList();
				}
			},
			updataList(){
				this.onPull();
			}
		}
	}
</script>

<style scoped>
	.container{
		position:absolute;
		width:100%;
		height:100%;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.scroll-bottom{
		position: relative;
		width: 100%;
		height: 80px;
	}
	.scroll-bot-h{
		height: 180px;
	}
	.scroll-bottom-img{
		width: 30px;
		height: 50px;
		vertical-align: text-top;
	}
	.scroll-bottom-div{
		width: 50%;
		height: 50px;
		margin: 0 auto;
		font-size: 28px;
		line-height: 50px;
		color: #ccc;
	}
	.scroll-bottom-text{
		margin: 0 10px;
		vertical-align: text-top;
	}
</style>

<!-- 
	import myScroll from '@/components/temp/myScroll.vue';
	components:{
		myScroll
	}
	<myScroll :state="state" :bheight=false :on-pull="onPull">
		<div slot="scrollList" @click="listClick" class='list-list'>
			<div></div>
		</div>
	</myScroll> -->
	