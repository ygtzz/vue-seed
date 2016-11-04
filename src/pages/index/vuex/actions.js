import types from './mutation-types';
import service from './mock';

function fGetArticleDetail(store,id) {
    var article = service.getArticleDetail(id, function(article) {
        store.commit(types['getArticleDetail'],article);
    })
}

function fGetCateList(store,{type,cate}){
    var cateList = {
        'hot' : [{
            'id' : 'now',
            'name' : '当前热门'
        },
        {
            'id' : 'weekly',
            'name' : '七日热门'
        },
        {
            'id' : 'mouthly',
            'name' : '三十日热门'
        }],

        'notes' : [{
            'id' : 'all',
            'name' : '全部'
        },
        {
            'id' : '13',
            'name' : '市集'
        },
        {
            'id' : '14',
            'name' : '生活家'
        },
        {
            'id' : '15',
            'name' : '世间事'
        }]
    };
    var list  = cateList[type] || [];
    for (var i = 0; i < list.length; i++) {
        list[i]['active'] = list[i]['id'] == cate;
    };      
    store.commit(types['getCateList'],list);
}

function fGetArticleList (store,{type,cate}) {
    service.getArticleList(type,cate,function(articles){
        store.commit(types['getArticleList'],articles);
    })
}

function fSearchArticles(store,keyword){
    service.searchArticles(keyword,function(articles){
        store.commit(types['searchArticles'],articles);
    })
}

export default {
    fGetArticleDetail:fGetArticleDetail,
    fGetCateList:fGetCateList,
    fGetArticleList:fGetArticleList,
    fSearchArticles:fSearchArticles
}