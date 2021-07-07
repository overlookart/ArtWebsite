import { h } from 'vue'
import { NIcon } from 'naive-ui'

// 渲染图标
function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

export { renderIcon as RNIcon }