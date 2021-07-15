import { RouteRecordRaw } from "vue-router";
import { RNIcon } from '../plugins/NaivePlus'
import { SpeedometerOutline } from '@vicons/ionicons5';
const routeName = "dashboard";

/**
 * @param name 路由名称
 * @param meta 路由元信息,(路由附带的扩展信息)
 * @param redirect 重定向地址，访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 */
const routes = [
    {
        path: '/dashboard',
        name: routeName,
        redirect: '/dashboard/console',
        meta: {
            title: 'Dashboard',
            icon: RNIcon(SpeedometerOutline)
        },
    }
]