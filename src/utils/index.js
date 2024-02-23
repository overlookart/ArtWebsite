/**
 * 组装菜单
*/
function generatorMenu(routerMap, parent) {
    routerMap.filter(item => {
        return item.meta.hidden != true && !['/:path(.*)*', '/', '/redirect', '/login'].includes(item.path)
    }).map(item => {
        const currentMenu = {
            ...item,
            ...item.meta,
            label: item.meta.title,
            key: item.name
        }
        // 是否有子菜单，并递归处理
        if (item.children && item.children.length > 0) {
        // Recursion
            currentMenu.children = generatorMenu(item.children, currentMenu)
        }
        return currentMenu
    });
}

export { generatorMenu }