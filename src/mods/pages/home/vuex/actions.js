import {GET_FORM,SUBMIT_FORM} from './mutation-types';

function fGetFormData(store,payLoad) {
    var oRuleForm = {
        name: 'test',
        region: 'beijing',
        date1: new Date('2016/10/11'),
        date2: new Date('2016/10/11 15:00:01'),
        delivery: true,
        type: ['地推活动','单纯品牌曝光'],
        resource: '线上品牌商赞助',
        desc: '活动形式'
    };
    store.commit(GET_FORM,oRuleForm);
}

function fSubmitFormData(store,payLoad){ 
    store.commit(SUBMIT_FORM,payLoad);
}

export default {
    fGetFormData:fGetFormData,
    fSubmitFormData:fSubmitFormData
}