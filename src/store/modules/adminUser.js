import types from '../types.js'
import ser from '../../server/server';

const state={
	couTit:'leolee',
	couCon:''
}

const getters={
	couTit(state){
		return state.couTit;
	},
	couCon(state){
		return state.couCon;
	}
}

const actions={
	loginFun({commit,state}, param){
		var senObj = {
    		"action":"coufull",
			"c_id": param.mId,
			"vers": 3
    	}
    	ser.loadDataFun('appCourse.php',senObj,function(msg){
			console.log(JSON.stringify(msg.cont.obj))
	  		if(msg.status == 'success'){
	  			commit(types.ADMIN_LOGIN,msg.cont.obj);
	  		}
    	})
	}
}
const mutations={
	[types.ADMIN_LOGIN](state,data){
		state.couTit=data.title;
		state.couCon=data.cont;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}