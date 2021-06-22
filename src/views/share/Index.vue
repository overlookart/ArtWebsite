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
 <div class="H5ToApp">
     <el-button type="primary" @click="open">打开APP</el-button>
 </div>
</template>
 
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
//
import Bowser from "bowser";
const urlScheme = 'caigou2003://123';
const universalLink = 'https://user.caigou2003.com';
const storeLink = 'https://apps.apple.com/cn/app/id1186613918';
export default {
    components: {},
    props: [],
    data () {
      return {
        
      }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {},
// 方法集合
    methods: {
        /**
         * 检测浏览器系统
         */
        detectBrowserOS() {
            const bowser = Bowser.getParser(window.navigator.userAgent);
            console.log('-----------------------------------');
            console.log('userAgent:',bowser.getUA());
            console.log('浏览器名称及版本:',bowser.getBrowser());
            console.log('操作系统信息:',bowser.getOS());
            console.log('平台信息:',bowser.getPlatform());
            console.log('解析引擎信息:',bowser.getEngine());
            console.log('-----------------------------------');
          
          return bowser.getOS();
        },

        // 判断手机上是否安装了app，如果安装直接打开url，如果没安装，执行callback
        openApp(url,openAppStore) {
            let browserOS = this.detectBrowserOS()
            if(browserOS.name === 'iOS' || browserOS === 'Android'){
                console.log('移动 App');
                var version = browserOS.version.split('.')[0];
                // 假设已经安装了app
                var isInstallApp = true;
                // 检测App的时间
                var detectAppTime = 4000; 
                // 开始检测App时间
                var startTime = Date.now();
                if (browserOS.name === 'iOS' && version >= 9){
                    //ios9把iframe封了，所以用的是直接跳转链接
                    window.location.href = urlScheme;
                    setTimeout(function() { 
                        console.log('应用商店',openAppStore);  
                        openAppStore && openAppStore()
                    }, 250);
                    setTimeout(function() {
                        location.reload();
                    }, 1000);
                }else{
                    console.log('安卓-134');
                    // 创建打开 urlScheme 的 iframe
                    var ifr = document.createElement("iframe");  
                    ifr.setAttribute('src', urlScheme);  
                    ifr.setAttribute('style', 'display:none');  
                    document.body.appendChild(ifr);
                }
                  
                // 检测App
                setTimeout(function () {  
                    console.log('检测App');
                    var endTime = Date.now(); 
                    if (endTime - startTime < detectAppTime + 100) {  
                        isInstallApp = false;
                    }
                }, detectAppTime);

            }

            // 5秒后检测是否安装了app，如果没有安装，跳转到app商店页面
            setTimeout(function () {  
                if (!isInstallApp) {
                    openAppStore && openAppStore()
                    console.log('5秒后检测到没有打开App');
                }
                document.body.removeChild(ifr);  
            }, 5000);  
        },
        
        open(){
            this.openApp("caigou2003://123", () => {
                console.log('开启应用商店');
                window.location.href = storeLink;
            });
        },
    },
/*------生命周期-------*/
//创建完成（可以访问当前this实例）
    created() {},
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
.H5ToApp {
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>