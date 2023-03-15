import { createRouter, createWebHistory } from "vue-router";
import Groups from "../views/Groups.vue";
import GroupView from "../views/Group.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.FRONTEND_URL),
	routes: [
		{
			path: "/",
			name: "groups",
			component: Groups,
		},
		{
			path: "/groups/:groupId",
			name: "GroupView",
			component: GroupView,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
	],
});

export default router;
