import Mock from 'mockjs';
import url from './url';

Mock.mock(url['get_data'],{
    name: 'test',
    region: 'beijing',
    date1: new Date('2016/10/11'),
    date2: new Date('2016/10/11 15:00:01'),
    delivery: true,
    type: ['地推活动', '单纯品牌曝光'],
    resource: '线上品牌商赞助',
    desc: '活动形式'
});

Mock.mock(url['submit_data'],{
    success:true
});
