var ishidden = false;
function testFunc() {
    
    var e = document.getElementById('menu_view');
    var s = e.style;
    if (ishidden) {
        s.width = '200px';
    }else{
        s.width = '57px';
    }
    ishidden = !ishidden;
    console.log("测试的方法");
    

}

/**
Vue.config.productionTip = false
new Vue({
    el: "#one",
    template: "<one/>",
    components: {one}
})
 */


