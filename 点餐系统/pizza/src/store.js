import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
			menu:{},
			username:null,
			isLogin:false
  },
  mutations: {
			setPizzaData(state,data){
				state.menu = data ;
			},
			deleteData(state,id){
				state.menu.forEach((item,index)=>{
					 if(item.id===id ){
						 state.menu.splice(index,1)
					 }
				})
			},
			addData(state,data){
				state.menu.push(data);
			},
		loginstatu(state,data){
			if(data){
				state.username = data;
				state.isLogin = true;				
			}else{
				state.username = null;
				state.isLogin = false;
			}

		}
  },
	getters:{
		username(state){
			return state.username;
		},
		isLogin(state){
			return state.isLogin
		},
	
	},
  actions:{

  },
})
