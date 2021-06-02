import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//通过路由文件加载路由配置
/**
 * 
 */
const files =  require.context('./', false, /\.router.js$/);
const routes = [];
files.keys().forEach(key=>{
    console.log("c----",key);
    routes.push(...files(key).default);
})
console.log(routes);

const router = new VueRouter({
    routes
});

export default router