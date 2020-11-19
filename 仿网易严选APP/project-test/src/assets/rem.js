;
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    //设备像素比
    var tid;

    var devicePixelRatio = win.devicePixelRatio;

    metaEl.setAttribute("content", "initial-scale=.5, maximum-scale=.5 , minimum-scale=.5, user-scalable=no viewport-fit=cover")

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var ua = navigator.userAgent.toLowerCase();
        //普通手机时，执行

        if (!/ipad/.test(ua)) {
            if (width / 2 > 750) {
                width = 750 * 2
            }
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + "px";

        console.log(ua)
    }
    win.addEventListener("resize", function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300)
    }, false);
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300)
        }
    }, false);
    refreshRem()
})
(window)