import types from '../mutation-types';
const {getCateList,getArticleList,searchArticles} =  types;

var state = {
    cates:[],
    articles:[]
}

var mutations = {};
mutations[getCateList] = function(state, cates) {
    state.cates = cates;
}
mutations[getArticleList] = function(state, articles) {
    state.articles = articles;
}
mutations[searchArticles] = function(state, articles) {
    state.articles = articles;
}

export default {
    state: state,
    mutations: mutations
}