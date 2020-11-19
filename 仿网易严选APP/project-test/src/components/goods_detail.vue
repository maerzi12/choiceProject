<!--  -->
<template>
    <div> 
        <div class="navbarclass">
            <van-nav-bar title="标题">
                <template #left>
                    <van-icon name="wap-home-o" size="45" @click="gotoHome"/>
                </template>
                <template #right>
                    <van-icon name="search" size="45" />
                    <van-icon name="cart-o" size="45" />
                </template>

            </van-nav-bar>
        </div>

        <!-- 商品信息 -->
        <div class="goods_detail">
            <img :src="goods_img" class="goods_imgsize">
            <p>{{goods_name}} </p>
            <p>{{goods_price}} </p>
        </div>

        <!-- sku组件-商品规格 -->
        <div class="skuClass">
            <van-sku
                v-model="show"
                :sku="sku"
                :goods="goods"
                goods-id="goodsId"
                @buy-clicked="onBuyClickedSku"
            />
                <template slot="sku-actions-top">
                    <van-uploader>
                        <van-button icon="plus" type="primary">上传文件</van-button>
                    </van-uploader>
                </template>
        </div>

        <!-- 商品导航 -->
        <div class="goods_downfooter">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
                <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="onClickButton"                    
                />
                <van-goods-action-button 
                type="warning" text="加入购物车" @click="onClickButton_shoppingcart"
                />


            </van-goods-action>
        </div>
    </div>
</template>

<script>
export default {
    name:'goods_detail', 
    data() {
        return {
            msg:'detail页面',
            goods_name:'',
            goods_img:'',
            goods_price:0,

            // sku组件数据
            show: false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {k: '颜色', // skuKeyName：规格类目名称
                    k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    v: [
                        {
                        id: '01', // skuValueId：规格值 id
                        name: '红色', // skuValueName：规格值名称
                        imgUrl: '', // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: '', // 用于预览显示的规格类目图片
                        },
                        {
                        id: '02',
                        name: '蓝色',
                        imgUrl: '',
                        previewImgUrl: '',
                        }
                    ],
                    largeImageMode: false, //  是否展示大图模式
                    },
                    {   k: '尺码', // skuKeyName：规格类目名称
                        k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                            id: '03', // skuValueId：规格值 id
                            name: 'M码', // skuValueName：规格值名称
                            imgUrl: '', // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: '', // 用于预览显示的规格类目图片
                            },
                            {
                            id: '04',
                            name: 'S码',
                            imgUrl: '',
                            previewImgUrl: '',
                            }
                        ],
                        largeImageMode: false, //  是否展示大图模式
                        }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: 2259, // skuId
                    s1: '01', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '03', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100*100, // 价格（单位分）
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }, {
                    id: 2259, // skuId
                    s1: '02', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '03', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 10*100, // 价格（单位分）
                    stock_num: 200 // 当前 sku 组合对应的库存
                    },                    {
                    id: 2259, // skuId
                    s1: '01', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '04', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 30*100, // 价格（单位分）
                    stock_num: 300 // 当前 sku 组合对应的库存
                    }, {
                    id: 2259, // skuId
                    s1: '02', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '04', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 40*100, // 价格（单位分）
                    stock_num: 400 // 当前 sku 组合对应的库存
                    },
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品

                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: ''
            }, 
            messages: [
                {
                // 商品留言
                datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                name: '留言', // 留言名称
                type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                required: '1', // 是否必填 '1' 表示必填
                placeholder: '' // 可选值，占位文本
                }
            ],


        }
    },
    //方法
    methods: {
        onClickIcon() {
          
        },
        onClickButton() {
            
        },
        onClickButton_shoppingcart(){
            this.show=true
        },
        gotoHome(){
            this.$router.push('/')
        },
        // 立即购买
        onBuyClickedSku(_skuData){
            console.log(_skuData)
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        //接受参数 console.log(this.$route.params.goods_info)
        let _n=this.$route.params.goods_info
        this.goods_name=_n.goods_name
        this.goods_img=_n.goods_img
        this.goods_price=_n.goods_price

        //sku缩略图
        this.goods.picture=this.$route.params.goods_info.goods_img
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods_detail .goods_imgsize{
    width: 100%;
    height: 100%;
}

    
</style>