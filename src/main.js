import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'

import {store}  from './store/store.js'

//配置默认路径
// axios.defaults.baseURL='https://wd2468178309upkmpi.wilddogio.com/'
axios.defaults.baseURL='https://wd5259196195tskwvr.wilddogio.com/'


//配置vue原型（在任何组件中都可以正常使用axios）
Vue.prototype.http=axios

Vue.use(VueRouter)

const router =new VueRouter({
	routes,
	store,
	// mode:'history',
	scrollBehavior(to,from,savePosition){
		if(savePosition){
			return savePosition
		}else {
			return {x:0,y:0}
		}
	}
})

// 全局守卫
router.beforeEach((to,from,next) =>{
//判断store.getters.isLogin===false
		if(store.getters.isLogin===true){
			next()
		}
		else if(to.path=='/login'||to.path=='/register'){
			next();
		}else{
			alert("还没有登录，请先登录");
			next('./login');
		}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
