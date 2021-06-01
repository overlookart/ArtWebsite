

/**
 * 主路由
 * 
 */

export default [
    /**首页的路由 */
    {
        path: "/",
        name: "home",
        component: () => import("../views/home/Home.vue")
    }
]