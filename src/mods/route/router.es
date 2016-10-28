import Vue from 'vue';
import VueRouter from 'vue-router';
import Trend from 'widget/trend/trend';
import Article from 'widget/article/article';
import Notfound from 'pages/error/notfound';

Vue.use(VueRouter);

var router = new VueRouter({
    mode:'hash',
    routes: [
        { path: '/', component: Trend },
        { path: '/p/:article_id', component: Article, name:'article'},
        { path: '/error/notfound', component: Notfound },
        { path: '/:type/:cate', component: Trend},
        { path: '/', redirect: '/hot/now'},
        { path: '*', redirect: '/error/notfound'}
    ]
});

export default router;
