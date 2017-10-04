import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "../components/home";
import shoppingCenter from "../components/shoppingCenter";

// 使用 vueRouter
Vue.use(VueRouter);


var router =  new VueRouter({
	mode:'history',
	base:__dirname,
    routes : [
    	{path:"/",component: home},
	    {path: "/shoppingCenter",component: shoppingCenter}
	]
})
export default router;