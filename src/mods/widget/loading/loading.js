import Vue from "vue";
import './loading.scss'
import './loading.scss';

export default Vue.component("c-loading", {
    className: 'c-loading',
    template: require('./loading.html'),
    props: ['cLoading']
});