const express = require('express')
const client = require('../db')

const hashRouter = express.Router()

hashRouter.post('/add', (req, res) => {
  //创建对象
  client.hmset('user', {name: '波多野结衣', age: 33}, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

hashRouter.get('/all', (req, res) => {
  //获取对象
  client.hgetall('user', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = hashRouter
