//全局cli配置文件
/**
 * 1.该文件和 package.json 同级 会被 @vue/cli-service 加载
 * 
 */

 module.exports = {
    //baseUrl :vue cli 3.3已弃用 请使用 publicPath

    //部署应用包时的基本 URL 
    publicPath: "/",
    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: "dist",
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: "",
    //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: "index.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing: true,
    //在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
    pages: {
        index:{
            // page 的入口
            entry: "src/main.js",
            //模版来源
            template: "public/index.html",
        }
    },
    //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    lintOnSave: "default",
    //是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
    //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: true,
    //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
    crossorigin: undefined,
    //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
    integrity: false,

    //如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
    //如果这个值是一个函数，则会接收被解析的配置作为参
    //configureWebpack

    //是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
    //chainWebpack

    devServer: {
        proxy: "http://localhost:4000"
    }

}
