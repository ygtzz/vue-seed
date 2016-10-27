import Vue from 'vue';
import marked from "widget/marked/marked";
import actions from 'vuex/actions';
import './article.css';

export default Vue.extend({
    template: require('./article.html'),
    vuex: {
        getters: {
            article: function(state){
                return state.article.article;
            },
            articleId: function(state){
                return state.route.params['article_id'];
            }
        },
        actions:{
            fGetArticleDetail: actions.fGetArticleDetail
        }
    },
    route:{
        data:function(){
            this.fGetArticleDetail(this.articleId); 
        }
    },
    filters: {
        marked: marked
    }
});