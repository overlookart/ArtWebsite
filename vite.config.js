import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

function pathResolve(dir) {
    return resolve(__dirname, '.', dir);
}

export default {
    plugins: [vue()],
    //
    hostname: '127.0.0.1',
    port: 3000,
    // 是否在浏览器内自动打开'
    open: true,
    // 是否开启 https
    https: false,
    // 是否服务端渲染
    ssr: false,

    outDir: 'dist',

    server:{
        proxy: {
            '/api': {
                target: 'https://api.pingping6.com/tools/baidutop/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
}