import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import actions from 'vuex/actions';
import 'widget/category/category';
import 'widget/list/list';
import 'widget/search/search';
import './trend.scss';

export default Vue.extend({
    name:'trend',
    inherit: true, //集成父元素所有属性
    template: require('./trend.html'),
    created(){
        this.fGetData();
    },
    watch: {
        '$route': 'fGetData'
    },
    computed:{
        type:function(){
            return this.$route.params['type'];
        },
        cate:function(){
            return this.$route.params['cate'];
        }
    },
    methods:{
        ...mapActions({
            fGetCateList:'fGetCateList',
            fGetArticleList:'fGetArticleList'
        }),
        fGetData:function(){
            const payLoad = {
                type: this.type,
                cate: this.cate
            };
            this.fGetCateList(payLoad);
            this.fGetArticleList(payLoad);
        }
    }
});