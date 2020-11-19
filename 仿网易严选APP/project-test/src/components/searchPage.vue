<!--  -->
<template>
<div class="title_div">
    <!-- 搜索框 -->
      <van-col class="m-Ipt m-searchIpt" span="21">    
            <!-- 搜索框放大镜 -->
            <template>
                <van-icon class="searchBtn" name="search" size=".5rem" />
            </template>
            <van-field 
                class="ipt"
                v-model="initialInputValFn"               
                placeholder="免费试用" 
                @input="clearBtn"   
                @keyup.enter='submitFn'       
            />           
            <template >
                <van-icon name="clear" size=".5rem" v-show="isclearBtn" @click="clickClearFn"/>
            </template>
      </van-col>
      <!-- 取消按钮 -->
      <van-col span="3">      
        <van-button  class="loginBtn" type="primary" size="mini">取消</van-button>
      </van-col>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:'searchPage', 
    data() {
        return {
            msg:'搜索页面',
            initialInputValFn:'',
            //输入值变化
            inputValFn:'',
            isclearBtn:false,
        }
    },
    //方法
    watch:{
        //监听
        inputValFn(){
            this.isclearBtn=true
        }
    },
    methods: {
        // watch监听搜索X值
        clearBtn(_v){
            this.inputValFn=_v           
        },
        // 点击完成清除按钮
        clickClearFn(){
            this.initialInputValFn='',
            this.isclearBtn=false
        },
        //enter搜索
        submitFn(){
            // console.log(this.inputValFn)
            axios.get('http://localhost:3344/search',{
                params:{
                    search_key:this.inputValFn
                }
            })
            .then(_d=>{
                console.log(_d.data)
            })
        },
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.title_div{
    background: #fff;
    padding: .21333rem .4rem;
}
.loginBtn{
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .32rem;
}
.m-searchIpt {
    padding-top: 0;
    padding-left: .26667rem;
    padding-bottom: 0;
    border: 0;
    background-color: #f4f4f4;
    height: .74667rem;
    border-radius: 4px;
}
.searchBtn{
    margin-right: 0.21333rem
}
.m-Ipt{
    padding: 0 .26667rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.ipt
{
    font-size: .37333rem;
    border: none;
    color: rgba(0,0,0,.8);
    background-color: transparent;
    flex: 1;
    line-height: .53333rem;
    padding-left: .02667rem;
    text-align:left;
}
.u-icon-hd-clearIpt {
    width: .6666666666666666rem;
    height: .6666666666666666rem;
    background-position: -2.32rem -.88rem;
}
</style>