import types from '../types.js'
import ser from '../../server/server';
import storage from '../../server/storage';

const state={
	wxToken:'',
	wxInfo:null
}

const getters={
	wxToken(state){
		return state.wxToken;
	},
	wxInfo(state){
		return state.wxInfo;
	}
}

const actions={
	loginWeiXin({commit,state}, param){
		ser.loadDataFun('wxLogin.php',{code:param.code},function(msg){
			if(msg.status == 'success'){
				if(msg.cont.add){
					storage.set("msdWebToken",msg.cont.token);
				}
				commit(types.WEIXIN_LOGIN,msg.cont);
				if(typeof param.sessfun == 'function')param.sessfun(true);
			}else{
				if(typeof param.sessfun == 'function')param.sessfun(false);
			}
		})
	}
}
const mutations={
	[types.WEIXIN_LOGIN](state,data){
		state.wxToken = data.token;
		state.wxInfo = data.info;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}