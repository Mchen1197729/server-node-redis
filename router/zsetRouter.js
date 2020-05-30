const express = require('express')
const client = require('../db')

const zsetRouter = express.Router()

/*
* sorted set
* zset key score1 value1 [score2 value2]
* score表示该元素的权重(按照score进行排序,score可重复)
* value不能重复
* */

zsetRouter.post('/add', (req, res) => {
  //向zset中添加元素
  // client.zadd('z_actress', 1, '林志玲', 28, '波多野结衣', 2, '神奇女侠', 3, '林志玲', 8, '古川伊织', (error, result) => {
  client.zadd('z_actress', 1, 'apple', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

zsetRouter.get('/z_card', (req, res) => {
  //获得zset结构存储元素的数量
  client.zcard('z_actress', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

zsetRouter.get('/z_count', (req, res) => {
  //获得zset结构中指定分数间的的成员数量 zcount key min max
  client.zcount('z_actress', 0, 10, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

zsetRouter.post('/is_member', (req, res) => {
  //判断一个元素是否存在于set结构中
  client.sismember('actress', '神奇女侠1', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = zsetRouter
