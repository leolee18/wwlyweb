<template>
	<swiper :options="swiperOption">
		<swiper-slide  v-for="(slide, index) in swiperSlides" :key="index">
			<img src="../../../build/logo.png" v-on:click="swClick(slide)" class="mswiper-img" />
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	export default {
		data () {
			return {
				swiperOption: {
					autoplay: true,
					loop : true,
					pagination: {
						el: '.swiper-pagination'
					},
					preventLinksPropagation : false,
				},
				swiperSlides: [1, 2, 3, 4, 5]
			}
		},
		methods: {
			swClick:function(mObj){
				console.log(mObj)
			}
		}
	}
</script>

<style>
	.swiper-container{
		position: relative;
		width: 750px;
		height: 270px;
		background-color: #ccc;
	}
	.mswiper-img{
		position: absolute;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
	}
</style>

<!-- <mSwipre :swidat="indSwi" :on-turl="onTurl"></mSwipre> -->
