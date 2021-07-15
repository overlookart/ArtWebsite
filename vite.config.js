//当以命令行方式运行 vite 时，Vite 会自动解析 项目根目录 下名为 vite.config.js 的文件
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
//配置智能提示
import { defineConfig } from "vite";

function pathResolve(dir) {
    return resolve(__dirname, '.', dir);
}

export default defineConfig({
    //项目的根目录，index.html文件所在的位置
    root: "./",
    //开发或生产环境服务的公共基础路径 绝对URL路径名如/foo/ 完整的URL如https://foo.com/ 空字符串或 ./（用于开发环境)
    base: "./",
    //覆盖 serve 和 build 时的模式 或通过命令行 --mode 选项来重写。
    mode: "development", //production 生产模式
    //定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换
    // define: recoord,
    //需要用到的插件数组
    plugins: [vue()],
    //作为静态资源服务的文件夹 该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径
    publicDir: "./public",
    //存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。如需重新生成缓存文件，你可以使用 --force 命令行选项或手动删除目录。此选项的值可以是文件的绝对路径，也可以是以项目根目录为基准的相对路径
    cacheDir: "./cache",
    /*
    resolve: {
        //当使用文件系统路径的别名时，请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析
        alias: "",
        //如果你在你的应用程序中有相同依赖的副本（比如 monorepos），请使用此选项强制 Vite 始终将列出的依赖项解析为同一副本（从项目根目录）
        dedupe: [],
        //解决程序包中 情景导出 时的其他允许条件。
        conditions: [],
        //package.json 中，在解析包的入口点时尝试的字段列表。注意：这比从 exports 字段解析的情景导出优先级低：如果一个入口点从 exports 成功解析，resolve.mainFields 将被忽略
        // mainFields: ['module', 'jsnext:main', 'jsnext'],
        //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
        // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },*/
    css: {
        //
        modules: "",
        //内联的 PostCSS 配置（格式同 postcss.config.js），或者一个（默认基于项目根目录的）自定义的 PostCSS 配置路径。其路径搜索是通过 postcss-load-config 实现的/注意：如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
        postcss: "",
        //指定传递给 CSS 预处理器的选项。
        preprocessorOptions: "",
    },
    json: {
        //是否支持从 .json 文件中进行按名导入
        namedExports: true,
        //若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。
        //开启此项，则会禁用按名导入
        stringify: false,
    },
    //ESBuildOptions 继承自 ESbuild 转换选项。最常见的用例是自定义 JSX
    esbuild: "",
    //指定其他文件类型作为静态资源处理
    assetsInclude: "",
    //调整控制台输出的级别
    logLevel: "info",
    //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下可以通过 --clearScreen false 设置
    clearScreen: true,
    //用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径
    envDir: "root",
    //开发服务器选项
    server: {
        //指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址
        host: "127.0.0.1",
        //指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口
        port: "3000",
        //时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        //启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
        https: false,
        //在开发服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。若你想指定喜欢的浏览器打开服务器，你可以设置环境变量 process.env.BROWSER（例如：firefox）。查看 这个 open 包 获取更多细节
        open: "./index.html",
        //为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。如果 key 值以 ^ 开头，将会被解释为 RegExp。configure 可用于访问 proxy 实例
        proxy: "",
        //为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用
        cors: true,
        //设置为 true 强制使依赖预构建
        force: false,
        //禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况
        hmr: "",
        //传递给 chokidar 的文件系统监听器选项
        watch: "",
        //以中间件模式创建 Vite 服务器
        // middlewareMode: "ssr",
    },
    // 是否服务端渲染
    ssr: false,
    //
    outDir: 'dist',
})