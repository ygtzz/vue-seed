import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'
import actions from './actions';
import { GET_FORM, SUBMIT_FORM } from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
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
        [GET_FORM](state, payLoad) {
            console.log('get form payLoad');
            console.log(payLoad);
            state.ruleForm = payLoad;
        },
        [SUBMIT_FORM](state, payLoad) {
            console.log('submit form');
            console.log(payLoad);
        }
    },
    actions,
    getters
});