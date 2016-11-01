
import Vue from "vue";
import { mapGetters, mapActions } from 'vuex';
import actions from 'pages/index/vuex/actions';
import './search.css';

export default Vue.component("c-search", {
    name:'search',
    template: require('./search.html'),
    data: function(){
    	return {
    		search:''
    	};
    },
    methods:{
        ...mapActions({
            fSearchArticles:'fSearchArticles',
            fGetArticleList:'fGetArticleList'
        })
    },
    watch:{
    	search: function(val,oldVal) {
    		this.fSearchArticles(val);
    	}
    }
});