/**
 * 使用mockjs来mock数据, 提供mock数据API接口
 */
import Mock from 'mockjs'
import data from './data.json'

//注册接口
Mock.mock('/daoway/server', {
  code: 0,
  data: data.server
})
/*
Mock.mock('/api2/ratings', {
  code: 0,
  data: data.ratings
})
Mock.mock('/api2/seller', {
  code: 0,
  data: data.seller
})
*/
// 不用export
