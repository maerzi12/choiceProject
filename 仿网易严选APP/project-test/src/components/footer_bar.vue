<!--  -->
<template>
    <div>
        <!-- footer导航栏 -->
        <div class="foot_div">    
        <van-tabbar v-model="active" @change="onFooterBtnChange">
            <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
            <van-tabbar-item icon="search" to='/classification'>分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o">值得买</van-tabbar-item>
            <van-tabbar-item icon="setting-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='/login'>个人</van-tabbar-item>
        </van-tabbar>
        </div>
    </div>
</template>

<script>
export default {
name:'xxx', 
    data() {
        return {
            msg:'footer页面',
            // 导航栏绑定事件
            active: 0,
        }
    },
    //方法
    methods: {
        onFooterBtnChange(_inx){
            console.log(_inx)
            localStorage.setItem('save_inx',_inx)
        },
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        let _n=localStorage.getItem('save_inx')
        this.active=Number(_n)
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>