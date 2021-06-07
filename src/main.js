import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './plugins/ElementUI'
import "./plugins/Animate"

new Vue({
    //路由
    router,
    //全局状态 这可以把 store 的实例注入所有的子组件
    store,
    render: h => h(App)
}).$mount("#app")