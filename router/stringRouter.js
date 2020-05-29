const express = require('express')
const client = require('../db')

const stringRouter = express.Router()

stringRouter.post('/add', (req, res) => {
  //创建字符串
  client.set('username', '刘德华', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = stringRouter
