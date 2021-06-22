

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
            },{
                path: "/animate",
                name: "animate",
                component: () => import("@/views/animate/Index.vue")
            },{
                path: "/store",
                name: "store",
                component: () => import("@/views/store/Index.vue")
            }
            
        ],
    },{
        path: "/share",
        name: "share",
        component: () => import("@/views/share/Index.vue")
    }
]