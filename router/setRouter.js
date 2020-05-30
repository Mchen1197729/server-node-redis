const express = require('express')
const client = require('../db')

const setRouter = express.Router()

setRouter.post('/add', (req, res) => {
  //向set中添加元素
  client.sadd('actress', '林志玲', '波多野结衣', '神奇女侠', '林志玲', '古川伊织', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

setRouter.post('/card', (req, res) => {
  //获得set结构存储元素的数量
  client.scard('actress', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

setRouter.get('/members', (req, res) => {
  //获得set结构中所有的成员
  client.smembers('actress', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

setRouter.post('/is_member', (req, res) => {
  //判断一个元素是否存在于set结构中
  client.sismember('actress', '神奇女侠1', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = setRouter
