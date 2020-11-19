<!-- 分类页面 -->
<template>
    <div>
        <!-- 搜索框 -->
        <div class="m-itemCateListHd">
            <van-col @click="searchBtnFn" class="m-topSearchIpt" span="15">
                <van-icon name="search" size=".5rem" />
                <span>搜索商品</span>
            </van-col>
        </div>
        <!-- 左侧边栏 -->
        <div style="position:relative;padding-left:2.16rem">
            <div class="siderbarClass">
                <van-sidebar v-model="activeKey" @change="onChange_sidebar">
                    <van-sidebar-item 
                    v-for="(n,inx) in sidebar_arr" 
                    :key=inx
                    :title="n.title"
                    />
                </van-sidebar>
            </div>
            <!-- 右侧边栏 -->
            <div class="sidebarGoods">
                <div class="goodsItem" 
                v-for="(n,inx) in goods_listObj" :key="inx"
                @click="gotoGoodsBuy(n)">
                    <img :src="n.goods_img" >
                    <p>{{n.goods_name}} </p>
                    <b>{{n.goods_price}} </b>
                </div>
            </div>
        </div>


        <!-- footer页面 -->
        <footer_bar />
    </div>
</template>

<script>
import footer_bar from './footer_bar'
import axios from 'axios'
import { Notify } from 'vant'

export default {
    name:'classification', 
    data() {
        return {
            msg:'分类页面',
            activeKey: 0,
            sidebar_arr:[
                {title:"推荐专区"},
                {title:"新品专区"},
                {title:"居家生活"},               
            ],
            goods_listObj:null,
        }
    },  
    //注册
    components:{footer_bar},
    //方法
    methods: {
        searchBtnFn(){
        // console.log('路由跳转')
        this.$router.push('/searchPage')
        },
        // 侧边栏切换
        onChange_sidebar(_index) {
            // console.log(_index)
            axios.get('http://localhost:3344/goods_list_0'+_index)
                .then(_d=>{
                    console.log(_d.data)
                    this.goods_listObj=_d.data
                })
        },
        //跳转商品购买页
        gotoGoodsBuy(_n){
            // console.log(_n)
            this.$router.push({
                name:'goods_detail',
                params:{
                    goods_info:_n
                }
            })
        },
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        axios.get('http://localhost:3344/goods_list_00')
            .then(_d=>{
                console.log(_d.data)
                this.goods_listObj=_d.data
            })
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.m-itemCateListHd{
    align-items: center;
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color: #fff;
    position: relative;
}

.m-topSearchIpt{

    width: 100%;
    background-color: #ededed;
    border-radius: .10667rem;
    font-size: .37333rem;
    align-items: center;
    display: flex;
    justify-content: center;
    height: .74667rem;
    margin: .3rem 0;
}

.goodsItem{
    float: left;
    width: 44%;
    margin: 0rem 0.2rem 0.44rem 0.2rem;
    font-size: 0.37rem;
    overflow:hidden
}

.goodsItem img{
    height: 4.6rem;
}

.siderbarClass{
    position: fixed;left: 0;
}
</style>