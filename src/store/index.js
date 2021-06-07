import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import { SOME_MUTATION } from "./mutation-type"

const store = new Vuex.Store({
    //状态
    state: {
        count: 0,
    },
    //通过属性访问
    getters: {
        //接受 state 作为其第一个参数
        doneCount: (state) => {
            return state.count;
        },
        //接受其他 getter 作为第二个参数
        doCount: (state, getters) => {
            return getters.doneCount;
        },
    },

    //改变store中的状态的唯一方式:提交mutation
    //mutation 必须是同步函数
    mutations: {
        //需要调用 store.commit('increment') 触发该方法
        increment (state) {
            state.count ++;
        },

        
        /**
         * 传入额外的参数 mutation 的 载荷（payload）
         * @param {*} state this.state
         * @param {*} n 
         */
        increment (state, n) {
            state.count += n;
        },

        
        /**
         * 对象风格的提交方式
         * @param {*} state this.state
         * @param {*} dic {} 对象
         */
        increment (state, dic) {
            state.count += dic.con;
        },

        /**
         * 使用常量替代 Mutation 事件类型
         * ES2015 风格的计算属性命名功能来使用一个常量作为函数名
         * @param {*} state this.state
         */
        [SOME_MUTATION] (state) {

        },

    },

    /**
     * Action 提交的是 mutation，而不是直接变更状态
     * Action 可以包含任意异步操作
     */
    actions: {
        /**
         * 
         * @param {*} context 与 store 实例具有相同方法和属性的 context 对象
         */
        increment (context) {
            //可以进行异步操作


            //提交一个 mutation 必须用于用于接收对象方式的提交方法
            context.commit("increment", {con: 20});
            //获取 state
            console.log("store 的 actions 获取 state", context.state);
            //获取 getters
            console.log("store 的 actions 获取 getters", context.getters);
        }
    }
});

export default store;