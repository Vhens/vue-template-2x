/*
 * @Author: Vhen
 * @Date: 2020-11-13 15:03:48
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 15:04:59
 * @Description: 
 */
const Tool = {}

/** 设置天数
 * @description: 最近7天等 默认0是今日
 * @param {type}
 * @return:
 */
Tool.setDay = (day = 0) => {
  const start = new Date()
  const nowTime = start.getTime()
  const end = start.setTime(start.getTime() - 3600 * 1000 * 24 * day)
  return day === 0
    ? [nowTime, nowTime]
    : day === 1
    ? [end, end]
    : [end, nowTime]
}

export default Tool