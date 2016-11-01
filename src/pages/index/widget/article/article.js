import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import marked from "marked";
import actions from 'pages/index/vuex/actions';
import './article.css';

export default Vue.extend({
    name:'atrilce',
    template: require('./article.html'),
    created(){
        this.fGetData();
    },
    watch: {
        '$route': 'fGetData'
    },
    computed:{
        article:function(){
            return this.$store.getters.article;
        },
        articleContent:function(){
            return marked(this.article.content || '');
        },
        articleId:function(){
            return this.$route.params['article_id'];
        }
    },
    filters: {
        marked: marked
    },
    methods:{
        ...mapActions({
            fGetArticleDetail:'fGetArticleDetail'
        }),
        fGetData(){
            this.fGetArticleDetail(this.articleId);
        }
    }
});