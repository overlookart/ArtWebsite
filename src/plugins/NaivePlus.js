import { h } from 'vue'
import naive, { NIcon } from 'naive-ui'
// 配置ui
function setupNaive(app) {
    app.use(naive);
}
export { setupNaive }

// 渲染图标
function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
export { renderIcon as RNIcon }