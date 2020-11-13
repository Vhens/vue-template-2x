/*
 * @Author: Vhen
 * @Date: 2020-11-13 15:57:05
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 16:49:33
 * @Description:
 */

// import Mock from "mockjs";
let Mock = require('mockjs')
/*** 设置随机的接口响应时间，10-2500毫秒 ***/
// Mock.setup({
//   timeout: '10-2500'
// })
// 获取 mock.Random 对象
const Random = Mock.Random
let tableList = []
for (let i = 0; i < 100; i++) {
  let newObject = {
    title: Random.csentence(5, 10), //  Random.csentence( min, max )
    name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    url: Random.url(), // 生成web地址
    avatar: Mock.Random.image('100×100', Mock.Random.color(), '#757575', 'png', this.nickName),
    date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  }
  tableList.push(newObject)
}
Mock.mock('/api/userList', 'post', (params) => {
  const [index, size, total] = [JSON.parse(params.body).page, JSON.parse(params.body).size, tableList.length]
  let len = total / size
  // console.log(index, size, total, 'index, size, total')
  const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
  // 截取list
  const newProduceNewsData = tableList.slice(index * size, (index + 1) * size)
  // const newProduceNewsData = tableList.slice((index - 1) * size, index * size)
  console.log(newProduceNewsData, 'newProduceNewsData')
  return {
    code: 1,
    message: 'success',
    data: {
      page: index,
      size: size,
      list: tableList,
      total: total,
      totalPages: totalPages,
    },
  }
})
