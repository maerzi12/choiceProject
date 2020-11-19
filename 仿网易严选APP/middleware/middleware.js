// 项目中间件

let express = require('express');
let app = express();

//解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Max-Age", "3600");
    next();
});

// 搜索接口
app.get('/search', (req, res) => {
    // console.log(req.query.search_key)
    let _searchKey = req.query.search_key
        // 假数据
    let _tempGoods = [{
        name: '好看的男装',
        price: 99
    }, {
        name: '美丽的女装',
        price: 88
    }, {
        name: '可爱的童装',
        price: 55
    }, {
        name: '干活的工作服',
        price: 66
    }, ];
    // 过滤结果
    let _filterGoods = _tempGoods.filter(n => {
            return n.name.indexOf(_searchKey) !== -1
        })
        //filter只返回true
    let _resultObj = _filterGoods.length > 0 ?
        _filterGoods[0] : { msg: '没有找到结果' }

    res.send(_resultObj)
})

// 导航栏接口
app.get('/get_tabBtn_list', (req, res) => {
    let _d = ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运行旅行', '数码家电', '全球特色']
    res.send(_d)
})

//轮播图接口
app.get('/get_swipe_list', (req, res) => {
    let _d = [
        'https://yanxuan.nosdn.127.net/45a1e005b42f1282529a87ff00fec7a7.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/fac02929f04ec94bbe1dc1f4e768eb2b.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/370d9a7c7c6a56683dab4193f26dc03e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/af4f15a2d29c9649830c446552db48d9.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    ]
    res.send(_d)
})

app.get('/goods_list_00', (req, res) => {
    let _d = [{
        goods_img: 'https://yanxuan-item.nosdn.127.net/5f67e1fe1ad0b27fc448a53c4c8572b6.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '夏季宵食，盱眙小龙虾4-6钱 6斤装',
        goods_price: '99元'
    }, {
        goods_img: 'https://yanxuan-item.nosdn.127.net/92d8450294b6d0ef2fad530986d4c3c5.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '精美礼盒款，中秋送礼必备，无烟便携艾灸盒',
        goods_price: '58元'
    }, {
        goods_img: 'https://yanxuan-item.nosdn.127.net/1eb66a2bfe5c55ff10ec81c8695e6eb7.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '自己在家染头发 日本免调和染白染发膏',
        goods_price: '79元'
    }, {
        goods_img: 'https://yanxuan-item.nosdn.127.net/814e9d8e6015a43b36201ecfc2657608.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '好肌肤秘籍 活颜水乳套装',
        goods_price: '189元'
    }, ]
    res.send(_d)
})

app.get('/goods_list_01', (req, res) => {
    let _d = [{
        goods_img: 'https://yanxuan-item.nosdn.127.net/5f67e1fe1ad0b27fc448a53c4c8572b6.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '夏季宵食，盱眙小龙虾4-6钱 6斤装',
        goods_price: '99元'
    }, {
        goods_img: 'https://yanxuan-item.nosdn.127.net/92d8450294b6d0ef2fad530986d4c3c5.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '精美礼盒款，中秋送礼必备，无烟便携艾灸盒',
        goods_price: '58元'
    }, ]
    res.send(_d)
})

app.get('/goods_list_02', (req, res) => {
    let _d = [{
        goods_img: 'https://yanxuan-item.nosdn.127.net/5f67e1fe1ad0b27fc448a53c4c8572b6.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '夏季宵食，盱眙小龙虾4-6钱 6斤装',
        goods_price: '99元'
    }, {
        goods_img: 'https://yanxuan-item.nosdn.127.net/92d8450294b6d0ef2fad530986d4c3c5.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '精美礼盒款，中秋送礼必备，无烟便携艾灸盒',
        goods_price: '58元'
    }, {
        goods_img: 'https://yanxuan-item.nosdn.127.net/1eb66a2bfe5c55ff10ec81c8695e6eb7.png?type=webp&imageView&quality=65&thumbnail=330x330',
        goods_name: '自己在家染头发 日本免调和染白染发膏',
        goods_price: '79元'
    }, ]
    res.send(_d)
})

app.get('/bbb', (req, res) => {
    res.send('bbb')
})

app.listen(3344, () => {
    console.log('高仿网易严选第二版')
})