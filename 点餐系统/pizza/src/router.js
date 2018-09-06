import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import login from './components/login'
import about from './components/about/about'
import register from './components/register'
import menu from './components/menu'
import admin from './components/admin'
//二级路由
import history from './components/about/history'
import buy from './components/about/buy'
import say from './components/about/say'
import address from './components/about/address'

Vue.use(Router)

export default new Router({
  routes: [
   {path:'/',component:home},
   {path:'/login',component:login},
   {path:'/about',component:about,redirect:'/about/history',children:[
		 {path:'/about/history',component:history},
		 {path:'/about/buy',component:buy},
		 {path:'/about/say',component:say},
		 {path:'/about/address',component:address},
	 ]},
   {path:'/register',component:register},
   {path:'/menu',component:menu},
   {path:'/admin',component:admin},
	 {path:'*',redirect:'/'} ////******************************
  ],
	mode:'history'
})
