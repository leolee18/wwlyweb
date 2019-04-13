<template>
	<div class="container">
		<div class="rai-list">
			<div class="rai-div">
				<img src="../../assets/rai_lxy.png" class="rai-div-img" />
				<span class="rai-div-text">老学员看这里</span>
			</div>
			<a href="http://www.baidu.com" class="rai-a"><img src="../../assets/ind_dh_jsly.png" class="rai-a-i"/>城士大夫士大夫</a>
			<a href="http://www.baidu.com" class="rai-a">城士大夫士大夫</a>
			<a href="http://www.baidu.com" class="rai-a">城士大夫士大夫</a>
		</div>
		<div class="rai-list">
			<div class="rai-div">
				<img src="../../assets/rai_lxy.png" class="rai-div-img" />
				<span class="rai-div-text">老学员看这里</span>
			</div>
			<a href="http://www.baidu.com" class="rai-a">城士大夫士大夫</a>
			<a href="http://www.baidu.com" class="rai-a">城士大夫士大夫</a>
			<a href="http://www.baidu.com" class="rai-a">城士大夫士大夫</a>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
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
		border: 1px solid #00244D;
		margin: 80px auto 40px;
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
