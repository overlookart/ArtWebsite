export default [
    {
        path: "/user",
        name: "user",
        component: () => import("/src/views/user/index.vue")
    }
]