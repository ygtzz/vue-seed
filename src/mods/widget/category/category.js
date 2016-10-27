
import Vue from "vue";
import './category.css';

export default Vue.component("c-category", {
    template: require('./category.html'),
    vuex: {
        getters: {
            type: function(state){
                return state.route.params['type'];
            },
            cates: function(state){
                return state.trend.cates;
            }
        }
    }
});