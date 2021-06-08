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
 <div class="base_style animate__animated animate__bounce">
     
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
            <el-button class="menu_size" type="" icon="el-icon-s-fold" size="small" circle @click="foldMenuAction"></el-button>
        </div>
        <!-- v-for 遍历菜单数据，生成菜单 -->
        <component v-for="menu in menus" :key="menu.index" :index="menu.index" :is="(menu.items && menu.items.length > 0) ? 'el-submenu' : 'el-menu-item'">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.title}}</span>
            </template>
            <template v-if="menu.items && menu.items.length > 0">
                <el-menu-item v-for="item in menu.items" :key="item.index" :index="item.index">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </el-menu-item>
            </template>
        </component>
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
                    index: "1",
                    title: "Menu",
                    icon: "el-icon-menu",
                    items: [
                        {
                            index: "1-1",
                            title: "",
                            icon: "el-icon-shopping-cart-2",
                        },{
                            index: "1-2",
                            title: "",
                            icon: "el-icon-present",
                        },
                    ]
                },{
                    index: "2",
                    title: "Ksbe",
                    icon: "el-icon-chat-round",
                    items: [
                        {
                            index: "2-1",
                            title: "",
                            icon: "el-icon-shopping-cart-2",
                        },{
                            index: "2-2",
                            title: "",
                            icon: "el-icon-present",
                        },
                    ]
                },{
                    index: "3",
                    title: "Animation",
                    icon: "",
                    items: []
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
    animation-delay: 2s;
    animation-direction: 2s;
}
.menu_size {
    font-size: 25px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>