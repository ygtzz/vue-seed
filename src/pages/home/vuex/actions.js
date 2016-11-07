import Vue from 'vue';
import VueResource from 'vue-resource';
import types from './mutation-types';
import {fFormatUtcDate} from 'widget/util/util';
import url from './url';

if(__DEV__){
    require('./mock');
}

Vue.use(VueResource);

function fGetFormData(store,payLoad) {
    store.commit(types['GET_FORM_START'],{loading:true});
    Vue.http.get(url['get_data'],{
        method:'GET'
    }).then(function(res){
        return res.json();
    })
    .then(function(json){
        var data = json;
        data.date1 = new Date(fFormatUtcDate(data.date1));
        data.date2 = new Date(fFormatUtcDate(data.date2));
        store.commit(types['GET_FORM_OK'],{loading:false,ruleForm:data});
    },function(){
        store.commit(types['GET_FORM_ERROR'],{loading:false});
    });
}

function fSubmitFormData(store,payLoad){ 
    store.commit(types['SUBMIT_FORM_START'],{loading:true});
    Vue.http.get(url['submit_data'],{
        method:'POST'
    }).then(function(res){
        console.log('submit response');
        console.log(res);
        store.commit(types['SUBMIT_FORM_OK'],{loading:false});
    },function(){
        store.commit(types['SUBMIT_FORM_ERROR'],{loading:false});
    });
}

export default {
    fGetFormData:fGetFormData,
    fSubmitFormData:fSubmitFormData
}