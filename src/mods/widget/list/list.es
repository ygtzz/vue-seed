
import Vue from "vue";
import service from "mock/service";
import datetime from 'widget/filter/datetime';
import './list.css';

export default Vue.component("c-list", {
    template: require('./list.html'),
    vuex: {
        getters: {
            cates: function(state){
                return state.trend.cates;
            },
            articles: function(state){
                return state.trend.articles;
            }
        }
    },
    filters : {
        datetime : datetime
    }
});