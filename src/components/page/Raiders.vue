<template>
	<div class="container">
		<div class="rai-list">
			<div class="rai-div">
				<img src="../../assets/rai_xxy.jpg" class="rai-div-img" />
				<span class="rai-div-text">新学员看这里</span>
			</div>
			<a v-for="(sliden, indexn) in apLygln" :key="indexn" :href="sliden.uri" class="rai-a"><img src="../../assets/ind_dh_jsly.png" class="rai-a-i"/>{{sliden.name}}</a>
		</div>
		<div class="rai-list">
			<div class="rai-div">
				<img src="../../assets/rai_lxy.jpg" class="rai-div-img" />
				<span class="rai-div-text">老学员看这里</span>
			</div>
			<a v-for="(slideo, indexo) in apLyglo" :key="indexo" :href="slideo.uri" class="rai-a">{{slideo.name}}</a>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		data () {
			return {
			}
		},
		computed:{
			...mapGetters([
				'apLygln',
				'apLyglo'
			])
		},
		mounted(){
			let self = this;
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.container{
		position:relative;
		width:750px;
		height: 100%;
	}
	.rai-list{
		position: relative;
		width: 630px;
		margin: 0 auto;
	}
	.rai-div{
		position: relative;
		height: 200px;
		width: 100%;
		border: 1px dashed #D5D5D5;
		margin: 80px auto 40px;
		overflow: hidden;
		background-color: #fff;
	}
	.rai-div-img{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 0;
	}
	.rai-div-text{
		position: absolute;
		text-align: right;
		top:70px;
		right: 40px;
		font-size: 34px;
		line-height: 60px;
		font-weight: bold;
	}
	.rai-a{
		position: relative;
		height: 60px;
		display: block;
		padding-left: 50px;
		font-size: 30px;
		line-height: 60px;
		color: #0076ff;
	}
	.rai-a-i{
		position: absolute;
		top:10px;
		left: 0;
	}
</style>
