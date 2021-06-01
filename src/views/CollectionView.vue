<!--
* @Author: xzh
* @Date: 2021-05-21 00:31:25
* @LastEditTime: 2021-05-21 10:09:32
* @LastEditors: xzh
* @Description: 组件描述
* @FilePath: /文件路径.vue
* 代码版权方：'政府采购信息网'
-->
<template>
 <div class="collection">
     <el-row v-for="item in collection.rowCount" :key="item" :gutter="10">
       <el-col v-for="item in collection.colCount" :key="item" :span="24 / collection.colCount">
           <el-card class="card_style"></el-card>
       </el-col>
     </el-row>
 </div>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
    components: {},
    data () {
      return {
        collection: {
            colCount: 2,
            rowCount: 2,
        },
        datasource: [

        ],
      }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {},
// 方法集合
    methods: {},
/*------生命周期-------*/
//创建完成（可以访问当前this实例）
    created() {},
//挂载完成（可以访问DOM元素）
    mounted() {},
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
 
<style >
.collection{
    width: 800px;
}
.el-row {
    margin-bottom: 20px;
}:last-child{
    margin-bottom: 0;
}
.card_style {
    width: 380px;
    height: 260px;
}
</style>