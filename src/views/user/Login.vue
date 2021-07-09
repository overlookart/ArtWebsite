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
<div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
        <div class="view-account-top">
            <div class="view-account-top-logo">
                <img src="~@/assets/img/account-logo.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { useMessage } from 'naive-ui';
// reactive 是 Vue3 中提供的实现响应式数据的方法
import { reactive } from '@vue/reactivity';

export default {
    components: {},
    setup() {
        const formRef = ref();
        const message = useMessage();

        const state = reactive({
            loading: false,
            autoLogin: true,
            formInline: {
                username: 'admin',
                password: '123456'
            }
        });
        const rulse = {
            username: {required: true, message: '请输入用户名', trigger: 'blur'},
            password: {required: true, message: '请输入密码!', trigger: 'blur'}
        };
    }
};
</script>
 
<style scoped>

</style>