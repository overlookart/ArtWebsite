import { createStore } from "vuex"

const rootModule = {
    state: {},
    mutations: {},
    actions: {},
    modules: {}
};
const files = require.context("./", false, /\.module.js$/);
console.log(files.keys());
files.keys().forEach((key, index) => {
    let store = files(key).default;
    console.log(store);
    const moduleName = key.replace(/^\.\//, '').replace(/\.module.js$/, '');
    const modules = rootModule.modules || {};
    modules[moduleName] = store;
    //带命名空间的模块
    modules[moduleName].namespaced = true;
    rootModule.modules = modules;
});

/**
 * 将 store 分割成模块（module）
 */
const store = createStore(rootModule);
function setupStore(app) {
    app.use(store);
}
export { setupStore };