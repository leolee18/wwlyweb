<template>
	<div class="dialog" v-if="showDialog">
		<div class="dialog_container">
				<div class="dialog_content">
						<div class="dialog_content_top">{{prompt}}</div>
				</div>
				<div class="dialog_btn">
						<a href="javascript:;" class="btn" @click="dQXClick">取消</a>
						<a href="javascript:;" class="btn" @click="dQDClick">确定</a>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			prompt: {
				type:String,
				default:'提示内容'
			},
			showDialog: {
					type: Boolean,
					default: false
			},
			diaFun:{
				type:Function
			}
		},
		data () {
			return {
			}
		},
		methods: {
			dQXClick(){
				this.diaFun(false);
			},
			dQDClick(){
				this.diaFun(true);
			}
		}
	}
</script>

<style scoped>
	.dialog{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0,0,0,0.2);
  }
  .dialog_container{
    background: #fff;
    width: 500px;
    height: 260px;
    position: relative;
    border-radius: 10px;
    margin:0 auto;
    text-align: center;
  }
  .dialog_content{
		position: relative;
		height: 100px;
    padding: 30px 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
  }
	.dialog_content_top{
		font-size: 36px;
		color: #153453;
	}
	.dialog_btn{
		position: absolute;
		width: 100%;
		bottom: 30px;
		display: flex;
		justify-content: space-around;
	}
	.dialog_btn a{
    background: #bbb;
    padding: 8px 30px;
    border-radius: 5px;
    color: #fff;
		font-size: 30px;
    text-decoration: none;
		line-height: 40px;
		height: 40px;
    width: 120px;
    display: inline-block;
  }
  .dialog_btn a:nth-child(2){
		background-color: #0576FF;
  }
</style>

