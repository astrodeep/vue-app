import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "@/components/Article/Article";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Article
    },
    /*{
      /!*  path: '/about',
        name: 'about',*!/
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
/!*        component: () => import(/!* webpackChunkName: "about" *!/ '../views/AboutView.vue')*!/
    }*/
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
