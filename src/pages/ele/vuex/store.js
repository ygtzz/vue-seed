import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'
import actions from './actions';
import types from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loading:false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
             { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
    },
    mutations: {
        [types['GET_FORM_START']](state, payLoad) {
            state.loading = payLoad.loading;
        },
        [types['GET_FORM_OK']](state, payLoad) {
            console.log('get form ok');
            console.log(payLoad);
            state.ruleForm = payLoad.ruleForm;
            state.loading = payLoad.loading;
        },
        [types['GET_FORM_ERROR']](state, payLoad) {
            console.log('get form error');
            state.loading = payLoad.loading;
        },
        [types['SUBMIT_FORM_START']](state, payLoad) {
            state.loading = payLoad.loading;
        },
        [types['SUBMIT_FORM_OK']](state, payLoad) {
            console.log('submit form');
            console.log(payLoad);
            setTimeout(function(){
                state.loading = payLoad.loading;
            },500);
        },
        [types['SUBMIT_FORM_ERROR']](state, payLoad) {
            console.log('submit form error');
            state.loading = payLoad.loading;
        }
    },
    actions,
    getters
});