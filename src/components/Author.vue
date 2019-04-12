<template>
  <div class="container">
    <img src="@/assets/loadingBubbles.svg" class="load-img" />
    <div class="load-text">{{ msg }}</div>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import storage from '../server/storage';
	import ser from '../server/server';
	
	export default {
		created () {
			var self = this;
			if(self.isWeiXin()){
				var code = self.GetUrlParame('code');
				console.log(code)
				if (!code) {
					var domine = window.location.href.split('#')[0];
					//window.location="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd504aa4c3a7d7fe3&redirect_uri="+domine+"&response_type=code&scope=snsapi_userinfo&state=abc";
				} else {
					var sendObj = {
						code:code,
						sessfun:this.sessfun
					};
					//this.$store.dispatch('loginWeiXin',sendObj);
				}
			}else{
				console.log('不在微信里面')
			}
		},
		data () {
			return {
				msg: '登录中……'
			}
		},
		methods: {
			sessfun(mbool){
        		if(mbool){
        			var mAutUrl = storage.get('authorUrl');
        			if(mAutUrl){
        				this.$router.push({path:mAutUrl});
        			}else{
        				this.$router.push({path:'/'});
        			}
        		}else{
            		
            	}
            },
			 GetUrlParame (parameName) {
				var parames = window.location.search;
				if (parames.indexOf(parameName) > -1) {
					var parameValue = ''
					parameValue = parames.substring(parames.indexOf(parameName), parames.length)
					if (parameValue.indexOf('&') > -1) {
						parameValue = parameValue.substring(0, parameValue.indexOf('&'))
						parameValue = parameValue.replace(parameName + '=', '')
						return parameValue
					}
					return ''
				}
			},
			isWeiXin(){
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger'){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		position:absolute;
		width: 750px;
		height: 100%;
		display: flex;
		flex-direction:column;
		flex-wrap:wrap;
		justify-content: center;
		align-items: center;
		background-color:#fff;
	}
	.load-img{
		display: block;
		width: 20%;
	}
	.load-text{
		display: block;
		width: 100%;
		font-size: 35px;
		margin-top: 50px;
		color: #666;
		text-align: center;
	}
</style>
