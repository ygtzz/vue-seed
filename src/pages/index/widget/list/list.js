
import Vue from "vue";
import { mapGetters, mapActions } from 'vuex';
import {datetime} from 'widget/filter/datetime';
import './list.css';

export default Vue.component("c-list", {
    name:'list',
    template: require('./list.html'),
    computed: {
        cates: function () {
            return this.$store.getters.cates;
        },
        articles: function () {
            return this.$store.getters.articles;
        }
    },
    filters : {
        datetime : datetime
    }
});