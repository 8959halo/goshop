//使用mockjs来mock数据接口

import Mock from 'mockjs'
import data from './data.json'

//提供goods的接口
Mock.mock('/goods',{code:0,data:data.goods})
//提供ratings的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//提供info的接口
Mock.mock('/info',{code:0,data:data.info})


