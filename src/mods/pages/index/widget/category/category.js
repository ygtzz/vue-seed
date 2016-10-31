
import Vue from "vue";
import './category.css';

export default Vue.component("c-category", {
    name:'category',
    template: require('./category.html'),
    computed: {
        cates: function () {
            return this.$store.getters.cates;
        },
        type: function () {
            return this.$route.params['type'];
        }
    }
});