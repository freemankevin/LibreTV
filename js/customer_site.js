const CUSTOMER_SITES = {
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源（高速高清）',
    },
    lizi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源（超稳定）',
    },
    zy1080: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '1080P优质库（画质顶尖）',
    },
    wolong: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源（剧集最全）',
    },
    vipmv: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源（VIP解锁）',
    },
    tangrenjie: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街（华语强）',
    },
    kan39: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影视（经典老源）',
    },
    lehoo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视（生活类强）',
    },
    kuapi: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源（动漫电影平衡）',
    },
    demo: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '公开Demo源（备用）',
    }
};

// 调用全局方法合并（保持原样不动就行）
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}