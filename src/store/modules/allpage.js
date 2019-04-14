import types from '../types.js'
import ser from '../../server/server';

const state={
	apLygln:[],
	apLyglo:[],
	apWwbzk:[],
	apParAll:null,
	parObj:null
}

const getters={
	apLygln(state){
		return state.apLygln;
	},
	apLyglo(state){
		return state.apLyglo;
	},
	apWwbzk(state){
		return state.apWwbzk;
	},
	apParAll(state){
		return state.apParAll;
	},
	parObj(state){
		return state.parObj;
	}
}
const actions={
	allPageFun({commit,state}){
    	ser.loadDataFun('all.php',{},function(msg){
			//console.log(JSON.stringify(msg.cont))
	  		if(msg.status == 'success'){
	  			commit(types.ALL_PAGE_DATA,msg.cont);
	  		}
    	})
	}
}
const mutations={
	[types.ALL_PAGE_DATA](state,data){
		state.apLygln=data.listObj.lygln;
		state.apLyglo=data.listObj.lyglo;
		state.apWwbzk=data.listObj.wwbzk;
		state.apParAll=data.listObj;
		
		state.parObj=data.parObj;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}