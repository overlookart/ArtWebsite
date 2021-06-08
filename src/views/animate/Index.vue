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
     <el-carousel :interval="5000" type="card" height="300px" @change="healdCarouselChange">
       <el-carousel-item v-for="animate in getAnimatesWithTitle('Attention seekers')" 
       :key="animate.title"
       :class="[{animate__animated: animate.isActive}, animate.name]"
       >

       </el-carousel-item>
     </el-carousel>
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
          animates: [
              {
                  title: "Attention seekers",
                  items: [
                      {
                          title: "bounce",
                          name: "animate__bounce",
                          direction: 2,
                          delay: 0,
                          isActive: true,
                      },{
                          title: "flash",
                          name: "animate__flash",
                          direction: 2,
                          delay: 0,
                          isActive: false,
                      },{
                          title: "pulse",
                          name: "animate__pulse",
                          direction: 2,
                          delay: 0,
                          isActive: false,
                      },{
                          title: "rubberBand",
                          name: "animate__rubberBand",
                          direction: 2,
                          delay: 0,
                          isActive: false,
                      },
                  ],
              }
          ],
      }
    },
// 监听属性 类似于data概念
    computed: {}, 
// 监控data中的数据变化
    watch: {},
// 方法集合
    methods: {
        getAnimatesWithTitle(title) {
            var animates = this.animates.find((animate) => {
                return animate.title === title;
            });
            return animates.items;
        },
        healdCarouselChange(vle){
            console.log("跑马灯切换",vle);
            this.getAnimatesWithTitle("Attention seekers").forEach((el, index) =>{
                if (vle == index) {
                    el.isActive = true;
                } else {
                    el.isActive = false;
                }
            })
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
.base_style {
    flex: auto;
    text-align: center;
    align-items: center;
}
.card_style {
    width: 400px;
    height: 300px;
    background-color: indianred;
    
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>