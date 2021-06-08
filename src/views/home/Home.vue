<!--
* @Author: xzh
* @Date: 2021-05-21 00:31:25
* @LastEditTime: 2021-05-21 10:09:32
* @LastEditors: xzh
* @Description: 组件描述
* @FilePath: /文件路径.vue
* 代码版权方：'xzh'
-->
<template>
 <div class="">
    <collection-view></collection-view>
    <el-button type="" @click="testAction">test</el-button>        
 </div>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

const CollectionView = () => import("../CollectionView")

export default {
    components: {CollectionView},
    data () {
      return {
        
      }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {
        
    },
// 方法集合
    methods: {
        testAction(){
            //this.$store 获取全局状态信息 commit("方法名") 调用store的方法
            // this.$store.commit("increment", 10);
            // this.$store.commit("increment", {con: 10});
            //分发 store actions
            this.$store.dispatch("increment");
            console.log("store.state",this.$store.state.count);
            console.log("store.getters",this.$store.getters.doCount);
            

        },
    },
/*------生命周期-------*/
//创建完成（可以访问当前this实例）
    created() {
        
    },
//挂载完成（可以访问DOM元素）
    mounted() {
        
    },
//创建之前
    beforeCreate() {},
//挂载之前
    beforeMount() {},
//更新之前
    updated() {},
//销毁之前
    beforeDestroy() {},
//销毁完成
    destroyed() {},
//如果页面有keep-alive缓存功能，这个函数会触发
    activated() {},
};
</script>
 

<style scoped>

/* .el-container {
    background-color: deeppink;
} */


</style>