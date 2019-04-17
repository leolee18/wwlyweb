<template>
  <div class="body_all" id="app">
    <router-view/>
		<m-dialog :prompt="prompt" :showDialog="showDialog" :diaFun="diaFun"></m-dialog>
  </div>
</template>

<script>
	import mDialog from '@/components/temp/mDialog.vue';
	import storage from './server/storage';
	export default {
		name: 'App',
		data () {
			return {
				prompt:'需要获得用户昵称、头像',
				showDialog:false
			}
		},
		components:{
			mDialog,
		},
		mounted(){
			var self = this;
			self.$store.dispatch('allPageFun');
			var mToken = storage.get('msdWebToken2');
			if(!mToken){
				this.showDialog = true;
			}
		},
		methods: {
			diaFun(mBool){
				if(mBool){
					this.$router.push({path:'/author'});
				}
				this.showDialog = false;
			}
		}
	}
</script>

<style>
	body{
		position:absolute;
		width:100%;
		height:100%;
		padding:0;
		margin:0;
		font-family:'Avenir', Helvetica, Arial, sans-serif;
		font-size:13px;
		color: #3E3A39;
		background-color:#fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.body_all{
		position:relative;
		width:750px;
		height:auto;
		min-height:100%;
		margin:0 auto;
		background-color:#fff;
	}
	.evno{
		pointer-events: none;
	}
	.acto:active{
		opacity: 0.9;
	}
	.actob:active{
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
