
import { createApp } from "vue"
import App from "./App.vue"
import { setupRouter } from "./router"
import { setupNaive } from './plugins/NaivePlus'
import { setupStore } from "./store"
//vue 2.0
// new Vue({
//     //注入路由器 任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
//     router,
//     //全局状态 这可以把 store 的实例注入所有的子组件
//     store,
//     render: h => h(App)
// }).$mount("#app");

//vue 3.0
const app = createApp(App);
setupNaive(app);
setupRouter(app);
setupStore(app);
const vm = app.mount("#app");
