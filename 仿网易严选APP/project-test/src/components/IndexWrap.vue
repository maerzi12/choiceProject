<template>
  <div class="title_div">
    <van-row type="flex" justify="space-between" style="padding: .21333rem .2rem;">
      <!-- logo -->
      <van-col  span="5">
        <img src="../assets/yanxuan.png" class="logo"/>
      </van-col>
      <!-- 搜索框 -->
      <van-col @click="searchBtnFn" class="m-topSearchIpt" span="15">
        <van-icon name="search" size=".5rem" />
        <span>搜索商品</span>
      </van-col>
      <!-- 登陆按钮 -->
      <van-col span="3">      
        <van-button class="loginBtn" type="primary" size="mini">登陆</van-button>
      </van-col>
    </van-row>
    <!-- 标签栏 -->
    <van-tabs class="toplabelSize">
      <van-tab v-for="index in tab_data" :title="index" :key="index" class="DownlabelSize">
         <!-- {{ index }} -->
      </van-tab`>
    </van-tabs>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <van-swipe-item v-for="_n in swipe_data" :key="_n">
        <img :src="_n" /> 
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图下的导航栏 -->
    <div class="m-indexServicePolicy">
      <ul>
        <li>
            <i style='background-image: url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png");'></i>
            网易自营品牌
          </li>
        <li>
            <i style="background-image: url('http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');"></i>
            30天无忧退货       
        </li>
        <li>
            <i style="background-image: url('http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');"></i>
            48小时快速退款     
        </li>
      </ul>
    </div>
    <!-- 宫格图 -->
    <div class="grid_size">
      <van-grid :column-num="5">
        <van-grid-item 
        v-for="(value ,inx) in grid_goods_img" :key=inx 
        :icon=value.img_url 
        :text=value.img_txt />
      </van-grid>
    </div>
    <!--倒计时 自定义样式 -->
    <div class='moduleTitle'>  
      <p class="left">限时购</p>
      <van-count-down :time="time_val" class="m-countdown">
        <template #default="timeData" >
          <span class="time_block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="time_block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="time_block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="#" class="right">更多>></a>
    </div>
    <!-- 限时购 -->
    <div class="grid_size">
      <van-grid :column-num="3" >
        <van-grid-item 
        v-for="(value,inx) in countDown_list" :key=inx
        :icon=value.img_url
        :text=value.img_price />
      </van-grid>
    </div>
    <!-- footer页面 -->
    <footer_bar />
  </div>
</template>

<script>
import '../assets/resetVant.css' 
import axios from 'axios'
import footer_bar from './footer_bar'

export default {
  name: 'IndexWrap',
  data(){
    return{      
      time_val: 30 * 60 * 60 * 1000,
      msg:'xx123',
      tab_data:[],
      swipe_data:[],
      // 倒计时数据
      countDown_list:[
        {img_url:"https://yanxuan-item.nosdn.127.net/ff51113995d5c8e1a78fb4a93b0765ec.png?quality=75&type=webp&imageView&thumbnail=216x216" ,
        img_price:"¥319"},
        {img_url: "https://yanxuan-item.nosdn.127.net/1e54e8d57281bc45c0f9302a85c11288.png?quality=75&type=webp&imageView&thumbnail=216x216",
        img_price:"¥3039"},
        {img_url:"https://yanxuan-item.nosdn.127.net/0550b71896b4a6f5c8eefafb664d3aba.png?quality=75&type=webp&imageView&thumbnail=216x216" ,
        img_price:"¥21.9"},
        {img_url: "https://yanxuan-item.nosdn.127.net/83301bdb2ae14a84edfc504cc0965058.png?quality=75&type=webp&imageView&thumbnail=216x216",
        img_price:"¥22.8"},
        {img_url: "https://yanxuan-item.nosdn.127.net/1428962bf5c7c6c54773c5c48e537c33.png?quality=75&type=webp&imageView&thumbnail=216x216",
        img_price:"¥719"},
        {img_url:"https://yanxuan-item.nosdn.127.net/1b6a08aa274cc8d42bbf6ff4ebb1fec8.png?quality=75&type=webp&imageView&thumbnail=216x216" ,
        img_price:"¥503"},
      ],
      // 宫格图数据
      grid_goods_img:[
        {img_url:'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
        img_txt:'新品首发'},
        {img_url:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
        img_txt:'居家生活'},
        {img_url:'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
        img_txt:'服饰鞋包'},
        {img_url:'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
        img_txt:'美食酒水'},
        {img_url:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
        img_txt:'个护清洁'},
        {img_url:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
        img_txt:'母婴亲子'},
        {img_url:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
        img_txt:'运动旅行'},
        {img_url:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
        img_txt:'数码家电'},
        {img_url:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
        img_txt:'全球特色'},
        {img_url:'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
        img_txt:'好货抄底'},
      ],
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

  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
      //导航栏数据
      axios.get('http://localhost:3344/get_tabBtn_list')
           .then(_d=>{
              //  console.log(_d.data)
              this.tab_data=_d.data
           })
      //轮播图数据
      axios.get('http://localhost:3344/get_swipe_list')
            .then(_d=>{
              //  console.log(_d.data)
              this.swipe_data=_d.data
            })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.title_div{
    background: #fff;
    
}
.logo{
    vertical-align: middle;
    width: 1.84rem;
    height: .5333333333333333rem;
    background-size: 5.013333333333334rem 5.013333333333334rem;
    background-position: -1.68rem -3.36rem;
    display: inline-block;
    margin-right: .26667rem;
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
.m-topSearchIpt{
    background-color: #ededed;
    border-radius: .10667rem;
    font-size: .37333rem;
    align-items: center;
    display: flex;
    justify-content: center;
}
.DownlabelSize{
  font-size: .35rem;
}
// 轮播图样式
.my-swipe .van-swipe-item {
  width: 100%;
  height: 100%;
  color: #fff;
  
  
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
//轮播图下导航栏
.m-indexServicePolicy{
  background:#fff;
}
.m-indexServicePolicy ul{
  width: 100%;
  height: .96rem;
  
  display: flex;
  align-items: center;
  // list-style-type: disc;
  // margin-block-start: 1em;
  // margin-block-end: 1em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
  // padding-inline-start: 40px;
  
}
.m-indexServicePolicy ul li{
  flex:1;
  float: left;

  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
}
.m-indexServicePolicy ul li i{
  width: .4266666666666667rem;
  height: .4266666666666667rem;
  background-size: 100% ;
  background-position: 50%;
  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
  display: inline-block;
  vertical-align: middle;
}

// 倒计时样式
.moduleTitle {
    width: 100%;
    height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 0.2rem;
    background: #fff;
    overflow: hidden;
}
.moduleTitle .m-countdown{
  margin: 0.42rem 0 0 0.16rem;
  float: left;
  
}
.moduleTitle p{
  float: left;
  font-size: .42667rem;
}

.moduleTitle a{
  font-size: .37333rem;
  float: right;
  margin-right: .5rem;
  
}

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.time_block {
  display: inline-block;
  width: .48rem;
  height: .48rem;
  color: #fff;
  font-size: .32rem;line-height: .48rem;
  text-align: center;
  background-color: #333;
  border-radius: .05333rem;
  margin: 0 .13333rem;
}
.down_size{
  margin: 0 0 10rem 0;
}
</style>

