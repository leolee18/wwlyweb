<template>
  <div class="container">
		<div class="ind-dt ind-dt1 dtimg"></div>
		<div class="ind-lj evno"></div>
		<div class="ind-jz ind-jz1 jzimg"></div>
		<div class="ind-dh ind-dh1">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg" />
			<div class="ind-dht"><img src="../assets/ind_dh_wwbzk.png" class="ind-dht-i" />衍生课乐园</div>
		</div>
		<div class="ind-fb">
			<img src="../assets/ind_mpa.png" class="ind-fb-all acto" />
		</div>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import storage from '../server/storage';
	
	export default {
		data () {
			return {
			}
		},
		mounted(){
			var self = this;
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.container{
		position:absolute;
		width:750px;
		min-height: 100%;
		background-color:#3E3A39;
	}
	.jzimg:active {
		-webkit-filter: drop-shadow(0px 0px 5px #f5c01b);
		filter: drop-shadow(0px 0px 5px #f5c01b);
	}
	.dtimg:active {
		-webkit-filter: brightness(95%) drop-shadow(0px 0px 5px #f5c01b);
		filter: brightness(95%) drop-shadow(0px 0px 5px #f5c01b);
	}
	.ind-lj{
		position: absolute;
		display: block;
		width: 100%;
		height: 200px;
		margin-top: 100%;
		z-index: 2;
		background-color: rgba(255,255,255,0.2);
	}
	.ind-dt{
		position: absolute;
		display: block;
		width: 100px;
		height: 100px;
		z-index: 1;
		background-color: rgba(255,255,255,1);
	}
	.ind-dt1{
		margin-top: 20%;
		margin-left: 20%;
	}
	.ind-jz{
		position: absolute;
		display: block;
		width: 100px;
		height: 100px;
		z-index: 3;
		background-color: rgba(255,255,255,1);
	}
	.ind-jz1{
		margin-top: 10%;
		margin-left: 10%;
	}
	.ind-dh{
		position: absolute;
		width: 172px;
		height: 92px;
		overflow: hidden;
	}
	.ind-dht{
		position: relative;
		display: inline-block;
		margin: 14px auto;
		padding-left: 34px;
		height: 50px;
		font-size: 22px;
		color: #3E3A39;
		font-weight: bold;
		line-height: 50px;
		overflow: hidden;
		z-index: 2;
	}
	.ind-dht-i{
		position: absolute;
		display: block;
		top:8px;
		left: 0;
	}
	.ind-dh1{
		margin-top: 50%;
		margin-left: 30%;
	}
	.ind-dh-bg{
		position: absolute;
		display: block;
		width: 100%;
		top:0;
		left: 0;
		z-index: 0;
	}
	
	
	.ind-fb{
	  position: fixed;
	  width: 100%;
	  bottom: 0;
	  left: 0;
	  z-index: 100;
	}
	.ind-fb-all{
		position: relative;
		margin: 0 auto 25px;
	}
</style>
