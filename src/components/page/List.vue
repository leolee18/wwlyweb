<template>
	<div class="container">
		<myScroll :state="state" :bheight=false :on-pull="onPull">
			<div slot="scrollList" @click="listClick" class='list-list'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</myScroll>
	</div>
</template>

<script>
	import myScroll from '@/components/temp/myScroll.vue';
	export default {
		data () {
			return {
				state:0
			}
		},
		components:{
			myScroll
		},
		mounted(){
			let self = this;
		},
		methods: {
			listClick(e){
				let mTar = e.target;
				if(mTar.className === 'ind-kc-one'){
					console.log(mTar.dataset.cid);
				}
				this.state = 1;
			},
			onPull(){
				let self = this;
				console.log('end aa list')
				self.state = 1;
				setTimeout(function(){
					self.state = 2;
				},1000)
			}
		}
	}
</script>

<style scoped>
	.container{
		position:absolute;
		width:750px;
		height: 100%;
		background-color:#fff;
	}
	.list-list{
	  position: relative;
	  width: 670px;
	  padding: 15px 40px;
	  overflow: hidden;
	}
</style>
