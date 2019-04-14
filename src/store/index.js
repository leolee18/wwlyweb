import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import getters from './getters'
import actions from './actions'
import loginwx from './modules/loginwx'
import allpage from './modules/allpage'

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		loginwx,
		allpage
	}
});