

/**
 * 主路由
 * 
 */

export default [
    /**首页的路由 */
    {
        path: "/",
        name: "index",
        component: () => import("@/views/index/Index.vue"),
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/Home.vue")
            },
            
        ],
    }
]