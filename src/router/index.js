import Vue from "vue";
import Router from "vue-router";
// import Actionsheet from "@/components/Actionsheet";
import Home from "../components/Home";
// import Product from "../components/product.vue";
import Sticky from "../components/sticky";
import Find from "../components/find";
import User from "../components/user";
import Bscroll from "../components/bettr";
import Map from "../components/Map";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/find",
			name: "find",
			component: Find
		},
		{
			path:"/user",
			name:"user",
			component: User
		},
		{
			path:"/sticky",
			name:"sticky",
			component: Sticky
		},
		{
			path:"/bettr",
			name:"bettr",
			component:Bscroll
		},
		{
			path: "/map",
			name:"map",
			component: Map
		}
	],
	mode: "history"
});
