<template>
	<div class="container">
		<img :src="'http://51coach.com/wwlyweb/'+mPObj.hImg" class="cri-head-img" />
		<div @click="listClick" class="cri-con cri-bottom">
			<div class="cri-tit">{{mPObj.jText}}</div>
			<div class="cri-cont" v-html="mPObj.jCont"></div>
			<div class="cri-tit">{{mPObj.aText}}</div>
			<div v-for="(slide, index) in apWwbzk" :key="index" v-bind:data-uri="slide.uri" class="cri-one actob">{{slide.name}}</div>
		</div>
		<div class="cri-fb">
			<div @click="criFoot" class="cri-fb-all acto">立即加入</div>
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
					'aText':'',
					'gmUri':''
				}
			}
		},
		computed:{
			...mapGetters([
				'apWwbzk',
				'parObj'
			])
		},
		watch: {
		    parObj(val) {
				this.mPObj = val.mbzk;
			}
		},
		mounted(){
			let self = this;
			if(self.parObj){
				self.mPObj = self.parObj.mbzk;
			}
		},
		methods: {
			criFoot(){
				if(this.mPObj.gmUri != ""){
					window.location = this.mPObj.gmUri;
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
		width: 100%;
		height: 480px;
		padding: 0;
		margin: 0;
		display: block;
		background-color: #3E3A39;
	}
	
	
	.cri-con{
		position: relative;
		width: 690px;
		min-height: 200px;
		margin: 0 auto;
	}
	.cri-bottom{
		padding-bottom: 130px;
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
		line-height: 44px;
	}
	.cri-one{
		position: relative;
		min-height: 110px;
		padding: 30px 40px;
		border: 2px solid #F5C01B;
		border-radius:8px;
		margin-bottom: 20px;
		font-size: 30px;
		line-height: 56px;
		box-sizing: border-box;
	}
	
	.cri-fb{
	  position: fixed;
	  width: 100%;
	  bottom: 0;
	  left: 0;
	  z-index: 100;
	}
	.cri-fb-all{
		position: relative;
		max-width: 750px;
		width: 100%;
		height: 125px;
		margin: 0 auto;
		box-shadow: 0 -1px 5px #ccc;
		background-color: #f5c01b;
		font-size: 40px;
		line-height: 125px;
		color: #fff;
		text-align: center;
	}
</style>
