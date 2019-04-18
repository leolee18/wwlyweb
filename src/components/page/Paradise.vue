<template>
	<div class="container">
		<img :src="'http://51coach.com/wwlyweb/'+mPObj.hImg" class="cri-head-img" />
		<div @click="listClick" class="cri-con">
			<div class="cri-tit">{{mPObj.jText}}</div>
			<div class="cri-cont">{{mPObj.jCont}}</div>
			<div class="cri-tit">{{mPObj.aText}}</div>
			<div v-for="(slide, index) in mPArr" :key="index" v-bind:data-uri="slide.uri" class="cri-one actob">{{slide.name}}</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		data () {
			return {
				mPObj:{
					'hImg':'',
					'jText':'',
					'jCont':'',
					'aText':''
				},
				mPArr:[]
			}
		},
		computed:{
			...mapGetters([
				'apParAll',
				'parObj'
			])
		},
		watch: {
		    parObj(val) {
				this.setParObj(val);
			},
			apParAll(val) {
				this.setParArr(val);
			}
		},
		mounted(){
			let self = this;
			if(self.parObj){
				self.setParObj(self.parObj);
			}
			if(self.apParAll){
				self.setParArr(self.apParAll);
			}
		},
		methods: {
			setParObj(val){
				let mType = this.$route.params.typ;
				if(!val){
					return;
				}
				if(mType === 'jlly'){
					document.title = '教练乐园';
					this.mPObj = val.mjlly;
				}else if(mType === 'mrt'){
					document.title = '铭人堂';
					this.mPObj = val.mmrt;
				}else if(mType === 'jsly'){
					document.title = '讲师乐园';
					this.mPObj = val.mjsly;
				}else if(mType === 'yskly'){
					document.title = '衍生课乐园';
					this.mPObj = val.myskly;
				}else if(mType === 'syly'){
					document.title = '商业乐园';
					this.mPObj = val.msyly;
				}
			},
			setParArr(val){
				let mType = this.$route.params.typ;
				if(mType === 'jlly'){
					this.mPArr = val.jlly;
				}else if(mType === 'mrt'){
					this.mPArr = val.mrt;
				}else if(mType === 'jsly'){
					this.mPArr = val.jsly;
				}else if(mType === 'yskly'){
					this.mPArr = val.yskly;
				}else if(mType === 'syly'){
					this.mPArr = val.syly;
				}
			},
			listClick(e){
				let mTar = e.target;
				if(mTar.className.indexOf("cri-one") !== -1){
					window.location = mTar.dataset.uri;
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		position:relative;
		width:750px;
		min-height: 100%;
	}
	.cri-head-img{
		position: relative;
		padding: 0;
		margin: 0;
		display: block;
		width: 100%;
		height: 480px;
		background-color: #3E3A39;
	}
	
	
	.cri-con{
		position: relative;
		width: 690px;
		min-height: 200px;
		margin: 0 auto;
	}
	.cri-tit{
		position: relative;
		height: 50px;
		margin: 45px auto 25px;
		font-size: 36px;
		line-height: 50px;
		font-weight: bold;
	}
	.cri-cont{
		position: relative;
		font-size: 24px;
		line-height: 34px;
	}
	.cri-one{
		position: relative;
		height: 110px;
		padding: 30px 40px;
		border: 2px solid #F5C01B;
		border-radius:8px;
		margin-bottom: 20px;
		font-size: 30px;
		line-height: 56px;
		box-sizing: border-box;
	}

</style>

