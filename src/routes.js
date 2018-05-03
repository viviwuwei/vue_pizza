import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import About from './components/about/About'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'


export const routes=[
 {path:'/',component:Home,name:"homeLink",components:{
 	default:Home,
 	'orderingGuide':OrderingGuide,
 	'delivery':Delivery,
 	'history':History
 }},
 {path:'/menu',component:Menu,name:"menuLink"},
 {path:'/admin',component:Admin
 // beforeEnter:(to,from,next)=>{
 	// alert("非登录状态，不能访问此页面");
 	// next();
 	  	// 判断store.getters.isLogin===false
//  	if(to.path=='/login'||to.path=='/register'){
//  		next();
//  	}else{
//  		alert("还没有登录，请先登录");
//  		next('./login');
//  	}
// }
},
 {path:'/about',redirect:'/about/contact',component:About,children:[
 	{path:'/about/contact',name:"contactLink",component:Contact},
 	{path:'/about/history',name:"historyLink",component:History},
 	{path:'/about/delivery',name:"deliveryLink",component:Delivery},
 	{path:'/about/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
 ]},
 {path:'/login',name:"loginLink",component:Login},
 {path:'/register',component:Register},
 {path:'/about/about',component:About},
 {path:'*',redirect:'/'}
]

