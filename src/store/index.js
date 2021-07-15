import { createStore } from "vuex"

const rootModule = {
    state: {},
    mutations: {},
    actions: {},
    modules: {}
};
const modules = import.meta.globEager('./*.module.js');
console.log('读取store模块',modules);
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modName = key.replace(/^\.\//, '').replace(/\.module.js$/, '');
    const mods = rootModule.modules || {};
    mods[modName] = mod;
    //带命名空间的模块
    mods[modName].namespaced = true;
    rootModule.modules = mods;
  });

/**
 * 将 store 分割成模块（module）
 */
const store = createStore(rootModule);
function setupStore(app) {
    app.use(store);
}
export { setupStore };