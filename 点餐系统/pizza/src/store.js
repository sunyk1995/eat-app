import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
			menu:{}
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
			}
  },
  actions: {

  }
})
