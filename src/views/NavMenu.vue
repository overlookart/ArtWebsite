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
 <div class="">
     <el-menu 
     mode="vertical"
     background-color="#909399"
     text-color="#303133"
     active-text-color="#409EFF"
     default-active="1"
     class="el-menu-vertical-demo"
     @open="openMenuAction"
     @close="closeMenuAction"
     @select="selectMenuAction"
     >
       <el-submenu index="1">
            <i class="el-icon-location"></i>
            <span slot="title">Menu</span>
            <el-menu-item index="1-1"></el-menu-item>
            <el-menu-item index="1-2"></el-menu-item>
       </el-submenu>
       <el-submenu index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">ksbe</span>
       </el-submenu>
     </el-menu>
 </div>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
    components: {},
    data () {
      return {
        menus: [
            {

            }
        ]
      }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {},
// 方法集合
    methods: {
        openMenuAction(key, keyPath){
            console.log("打开菜单",key, keyPath);
        },

        closeMenuAction(key, keyPath){
            console.log("关闭菜单",key, keyPath);
        },

        selectMenuAction(key, keyPath){
            console.log("选中菜单",key, keyPath);
        }
    },
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
 
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>