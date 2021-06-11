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
 <div class="base_style">
    <el-card class="login_card">
        <el-form :model="logindata">
          <el-form-item label="账号" >
              <el-input :value="logindata.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input :value="logindata.password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="" @click="loginAction">登录</el-button>
    </el-card>
 </div>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
    components: {},
    props: [],
    data () {
        return {
            logindata: {
                account: "",
                password: "",
            }
        }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {},
// 方法集合
    methods: {
        loginAction() {
            console.log(this.logindata);
        }
    },
/*------生命周期-------*/
//创建完成（可以访问当前this实例）
    created() {
        console.log("login 创建完成");
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
 
<style  scoped>
.base_style {
    width: 100%;
    height: 100%;
    position: relative;
}
.login_card{
    width: 400px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: 0 auto;
    text-align: center;
}
.test_style {
    width: 360px;
    margin: 0 auto;
    position: absolute;
}
</style>