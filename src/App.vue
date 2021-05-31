<template>
    <div id="app">
        <el-container>
            <el-aside width="200px">
                <nav-menu></nav-menu>
            </el-aside>
            
            <el-container>
                <el-header>header</el-header>
                <el-main>main</el-main>
                <el-footer>footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>

const NavMenu = () => import("../src/views/NavMenu")
export default {
    name: "app",
    components: {
        NavMenu
    }
}
</script>

<style>
.el-header {
    background-color: #B3C0D1
}

.el-aside {
    background-color: cadetblue;
    text-align: center;
    line-height: 60px;
}

.el-main {
    text-align: center;
    background-color: darkseagreen;
}
#app {
    width: 100%;
}
</style>