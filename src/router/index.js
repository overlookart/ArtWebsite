import { createRouter, createWebHistory} from 'vue-router'
// import {default as main} from "./main.router"

//通过路由文件加载路由配置
/**
 * 
 */
const modules = import.meta.globEager('./*.router.js');
console.log('读取路由模块',modules);
const routes = [];
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routes.push(...modList);
});
console.log(routes);

const router = createRouter({
    history: createWebHistory(),
    routes
});

function setupRouter(app) {
  app.use(router);
}
export { setupRouter };

export default router