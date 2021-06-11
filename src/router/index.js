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


//解决 Navigation cancelled from "xxx" to "xxx" with a new navigation. 报错的问题
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
      return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
  };
  //replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
    return originalReplace.call(this, location).catch(err => err);
};

export default router