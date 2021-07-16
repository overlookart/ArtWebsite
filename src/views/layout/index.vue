<template>
    <n-layout class="layout" :position="fixedMenu" has-sider>
        <n-layout-sider v-if="navMode === 'vertical'"
        show-trigger
        @collapse="collapsed = true"
        :position="fixedMenu"
        @expand="collapsed = false"
        :collapsed="collapsed"
        collapse-mode="width"
        :collapsed-width="64"
        :width="leftMenuWidth"
        :native-scrollbar="false"
        :inverted="inverted"
        class="layout-sider">
        </n-layout-sider>
        <n-layout :inverted="inverted">
            <n-layout-header :inverted="inverted" :position="fixedHeader">

            </n-layout-header>

            <n-layout-content class="layout-content">

            </n-layout-content>

            <n-layout-footer>

            </n-layout-footer>
        </n-layout>
    </n-layout>
</template>

<script>
import { defineComponent } from 'vue'

</script>