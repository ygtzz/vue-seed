import Vue from 'vue';
import Vuex from 'vuex';
import trend from 'modules/trend';
import article from 'modules/article';
import * as getters from './getters'
import actions from 'actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        trend,
        article
    }
});