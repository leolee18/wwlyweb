<template>
	<div @click="indListClick" class="container">
		<img src="../assets/dtbg.jpg" class="ind-demo" />
		<div class="ind-dt ind-dt1 dtimg" data-mtyp="jlly"></div>
		<div class="ind-dt ind-dt2 dtimg" data-mtyp="mrt"></div>
		<div class="ind-dt ind-dt3 dtimg" data-mtyp="jsly"></div>
		<div class="ind-dt ind-dt4 dtimg" data-mtyp="yskly"></div>
		<div class="ind-dt ind-dt5 dtimg" data-mtyp="syly"></div>
		<div class="ind-lj evno"></div>
		<img src="../assets/ind_lygl.png" class="ind-jz ind-jz1 jzimg" data-mtyp="lygl"/>
		<img src="../assets/ind_jlly.png" class="ind-jz ind-jz2 evno"/>
		<img src="../assets/ind_wwbzk.png" class="ind-jz ind-jz3 jzimg" data-mtyp="wwbzk"/>
		<img src="../assets/ind_mrt.png" class="ind-jz ind-jz4 evno"/>
		<img src="../assets/ind_jsly.png" class="ind-jz ind-jz5 evno"/>
		<img src="../assets/ind_ysly.png" class="ind-jz ind-jz6 evno"/>
		<img src="../assets/ind_syly.png" class="ind-jz ind-jz7 evno"/>
		<div class="ind-dh ind-dh1">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="lygl"><img src="../assets/ind_dh_lygl.png" class="ind-dht-i evno" />乐园攻略</div>
		</div>
		<div class="ind-dh ind-dh2">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="jlly"><img src="../assets/ind_dh_jlly.png" class="ind-dht-i evno" />教练乐园</div>
		</div>
		<div class="ind-dh ind-dh3">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="wwbzk"><img src="../assets/ind_dh_wwbzk.png" class="ind-dht-i evno" />五维标准课</div>
		</div>
		<div class="ind-dh ind-dh4">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="mrt"><img src="../assets/ind_dh_mrt.png" class="ind-dht-i evno" />铭人堂</div>
		</div>
		<div class="ind-dh ind-dh5">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="jsly"><img src="../assets/ind_dh_jsly.png" class="ind-dht-i evno" />讲师乐园</div>
		</div>
		<div class="ind-dh ind-dh6">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="yskly"><img src="../assets/ind_dh_ysly.png" class="ind-dht-i evno" />衍生课乐园</div>
		</div>
		<div class="ind-dh ind-dh7">
			<img src="@/assets/ind_dhbg.png" class="ind-dh-bg evno" />
			<div class="ind-dht" data-mtyp="syly"><img src="../assets/ind_dh_syly.png" class="ind-dht-i evno" />商业乐园</div>
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
			indListClick(e){
				let mTar = e.target;
				if(mTar.dataset.mtyp){
					if(mTar.dataset.mtyp === 'lygl'){
						this.$router.push({path:'/raiders'});
					}else if(mTar.dataset.mtyp === 'wwbzk'){
						this.$router.push({path:'/criterion'});
					}else{
						this.$router.push({path:'/paradise/'+mTar.dataset.mtyp});
					}
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		position:absolute;
		width:750px;
		height:100%;
		min-height:1000px;
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
		margin-top: 0;
		z-index: 2;
		background-color: rgba(255,255,255,0.2);
	}
	.ind-demo{
		position: absolute;
		display: block;
		top:0;
		left: 0;
		opacity: 0.2;
	}
	.ind-dt{
		position: absolute;
		display: block;
		width: 100px;
		height: 100px;
		z-index: 1;
		background-color: rgba(255,0,0,1);
	}
	.ind-dt1{
		margin-top: 30%;
		margin-left: 70%;
	}
	.ind-dt2{
		margin-top: 60%;
		margin-left: 6%;
	}
	.ind-dt3{
		margin-top:70%;
		margin-left: 70%;
	}
	.ind-dt4{
		margin-top: 90%;
		margin-left:6%;
	}
	.ind-dt5{
		margin-top: 90%;
		margin-left: 70%;
	}
	.ind-jz{
		position: absolute;
		display: block;
		z-index: 3;
	}
	.ind-jz1{
		margin-top: 15%;
		margin-left: 4%;
	}
	.ind-jz2{
		margin-top: 22%;
		margin-left: 73%;
	}
	.ind-jz3{
		margin-top: 31%;
		margin-left: 28%;
	}
	.ind-jz4{
		margin-top: 54%;
		margin-left: 10%;
	}
	.ind-jz5{
		margin-top: 56%;
		margin-left: 69%;
	}
	.ind-jz6{
		margin-top: 85%;
		margin-left: 19%;
	}
	.ind-jz7{
		margin-top: 89%;
		margin-left: 71%;
	}
	.ind-dh{
		position: absolute;
		width: 172px;
		height: 92px;
		text-align: center;
		overflow: hidden;
		z-index: 4;
	}
	.ind-dht{
		position: relative;
		display: inline-block;
		margin-top: 14px;
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
		margin-top: 9%;
		margin-left: 4%;
	}
	.ind-dh2{
		margin-top: 9%;
		margin-left: 69%;
	}
	.ind-dh3{
		margin-top: 18%;
		margin-left: 35%;
	}
	.ind-dh4{
		margin-top: 41%;
		margin-left: 6%;
	}
	.ind-dh5{
		margin-top: 45%;
		margin-left: 65%;
	}
	.ind-dh6{
		margin-top: 72%;
		margin-left: 18%;
	}
	.ind-dh7{
		margin-top: 77%;
		margin-left: 67%;
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
		display: block;
		margin: 0 auto 25px;
	}
</style>
