export default [
    {
        path: "/user",
        name: "user",
        component: () => import('../views/user/index.vue'),
        children: [
            {
                path: "/user/login",
                name: "login",
                component: () => import("../views/user/Login.vue")
            }
            
        ]
    }
]