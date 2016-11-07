import Vue from 'vue';
import store from './vuex/store';
import actions from 'pages/home/vuex/actions';
import footer from 'widget/footer/footer';
import form from './widget/form/form';
import './home.css';

var App = new Vue({
    store,
    template:`
       <div id="app" class="row-fluid">
            <div>
                <h1>Home Page</h1>
            </div>
            <c-form></c-form>
            <c-footer></c-footer>
        </div>
    `
});

App.$mount('#app');