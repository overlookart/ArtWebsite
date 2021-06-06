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
 <div class="animate__animated animate__bounce">
     
     <!--导航菜单-->
     <el-menu 
     mode="vertical"
     background-color="#ffffff"
     text-color="#303133"
     active-text-color="#409EFF"
     default-active="1"
     class="el-menu-vertical-demo"
     :collapse="menuIsFold"
     @open="openMenuAction"
     @close="closeMenuAction"
     @select="selectMenuAction"
     >
        <div>
            <el-button class="base_style" type="" icon="el-icon-s-fold" size="small" circle @click="foldMenuAction"></el-button>
        </div>
       <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>Menu</span>
            </template>
            <el-menu-item index="1-1">
                <i class="el-icon-shopping-cart-2"></i>
            </el-menu-item>
            <el-menu-item index="1-2">
                <i class="el-icon-present"></i>
            </el-menu-item>
       </el-submenu>
       <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-chat-round"></i>
                <span slot="title">Ksbe</span>
            </template>
            <el-menu-item index="2-1">
                <i class="el-icon-shopping-cart-2"></i>
            </el-menu-item>
            <el-menu-item index="2-2">
                <i class="el-icon-present"></i>
            </el-menu-item>
       </el-submenu>
       <el-submenu index="3">
           <template slot="title">
               <span slot>Animate</span>
           </template>
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
            //菜单是否折叠
            menuIsFold: false,
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
        /**
         * 折叠菜单按钮事件
         */
        foldMenuAction(){
            this.menuIsFold = !this.menuIsFold;
            this.$emit("updateSelfWidth");
        },
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
 
<style scoped>
.base_style{
    
    font-size: 25px;
    
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>