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
    <n-layout has-sider>
        <n-layout-sider bordered collapse-mode = "width" :collapsed-width="120" :width="200" show-trigger='arrow-circle'>
            <nav-menu></nav-menu>
        </n-layout-sider>
        <n-layout>
            <n-layout-header>header</n-layout-header>
            <n-layout-content>content</n-layout-content>
            <n-layout-footer>footer</n-layout-footer>
        </n-layout>
    </n-layout>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import NavMenu from '../NavMenu.vue'
const NavigationBar = () => import("../NavigationBar")
export default {
    components: {NavMenu, NavigationBar},
    props: [],
    data () {
      return {
        selfwidth: 200,
      }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {},
// 方法集合
    methods: {
        updateSelfWidth(){
            var nav_menudata = this.$refs.nav_menu._data;
            if(nav_menudata.menuIsFold){
                this.selfwidth = 60;
            }else{
                this.selfwidth = 200;
            }
        },
    },
/*------生命周期-------*/
//创建完成（可以访问当前this实例）
    created() {},
//挂载完成（可以访问DOM元素）
    mounted() {
        // this.$router.push("home");
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
 
<style  scoped>

</style>