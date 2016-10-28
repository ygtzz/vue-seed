import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from 'vuex/store';
import router from 'route/router';
import footer from 'widget/footer/footer';

var App = new Vue({
    router,
    store,
    template:`
       <div id="app" class="row-fluid">
        <router-view></router-view>
        <c-footer></c-footer>
       </div>
    `
});

sync(store, router);

App.$mount('#app');