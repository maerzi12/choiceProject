<!--  -->
<template>
    <div>
        <!-- 导航栏 -->
        <div class="navbarclass">
            <van-nav-bar title="网易严选">
                <template #left>
                    <van-icon name="wap-home-o" size="45" @click="gotoHome"/>
                </template>
                <template #right>
                    <van-icon name="search" size="45" />
                    <van-icon name="cart-o" size="45" />
                </template>
            </van-nav-bar>
        </div>

        <!-- 中间图标 -->
        <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
        </div>

        <!-- 手机登陆 -->
        <div class="btnWrap">       
            <van-button icon="envelop-o" type="primary" @click="loginBtnEvent">
                主要按钮
            </van-button>
        </div>


        <footer_bar />
    </div>
</template>

<script>
import footer_bar from './footer_bar'

export default {
name:'login', 
    data() {
        return {
            msg:'登陆页面'
        }
    },
    //方法
    methods: {
        gotoHome(){
            this.$router.push('/')
        },
        loginBtnEvent(){
            console.log('123')
        },
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    },
    //注册
    components:{footer_bar},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.logoWrap{
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem;
}

.logoWrap img{
    width: 3.57333rem;
    height: 1.2rem;
}

.btnWrap{
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
}
</style>