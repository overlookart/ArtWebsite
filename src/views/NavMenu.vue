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
<n-menu @update:value="handleUpdateValue" :options="menus"></n-menu>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

import { Menu, SpeedometerOutline, WaterOutline } from '@vicons/ionicons5';
import { RNIcon } from '../plugins/NaivePlus'
export default {
    name: 'NavMenu',
    components: {},
    props: {
        //菜单模式
        mode: {
            type: String,
            default: 'vertival'
        },
        //是否收起
        collapsed: {
            type: Boolean
        }
    },
    data () {
        return {
            //菜单是否折叠
            menuIsFold: true,
            menus: [
                {   
                    label: "Menu",
                    key: "1",
                    icon: RNIcon(Menu),
                    children: [
                        {
                            key: "1-1",
                            label: "Menu1",
                            icon: RNIcon(SpeedometerOutline),
                        },{
                            key: "1-2",
                            label: "Menu2",
                            icon: RNIcon(WaterOutline),
                        },
                    ]
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
            console.log("打开菜单",key, "/", keyPath);
        },

        closeMenuAction(key, keyPath){
            console.log("关闭菜单",key, "/", keyPath);
        },

        selectMenuAction(key, keyPath){
            console.log("选中菜单",key, "/", keyPath);
            var menu = this.menus.find((m) => {
                return m.index === keyPath[0];
            })
            var item = menu.items.find((ite) => {
                return ite.index === keyPath[1];
            })
            console.log(item);
            if (menu.index === "3") {
                this.$router.push("animate");
            } else if (menu.index === "4") {
                this.$router.push("store");
            } else if (menu.index === "5"){
                this.$router.push("share");
            }

        },
        handleUpdateValue (key, item) {
            console.log('[onUpdate:value]: ' + JSON.stringify(key));
            console.log('[onUpdate:value]: ' + JSON.stringify(item));
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

</style>