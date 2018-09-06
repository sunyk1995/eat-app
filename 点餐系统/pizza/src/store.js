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
			useremail(state,data){
				if(data){
					state.isLogin = true;
					state.username = data;
				}else{
					state.isLogin = false;
					state.username = null;
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
			setname({commit},data){
				commit('useremail',data);
			}
  },
})
