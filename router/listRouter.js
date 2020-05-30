const express = require('express')
const client = require('../db')

const listRouter = express.Router()

listRouter.get('/lpush', (req, res) => {
  //使用list  ->lpush
  client.lpush('stars', 'Rose', 'Jack', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

listRouter.get('/rpush', (req, res) => {
  //使用list  ->rpush
  client.rpush('stars', 'Jerry', 'Tom', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

listRouter.get('/rpop', (req, res) => {
  //使用list  ->rpop
  client.rpop('stars', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

listRouter.get('/lpop', (req, res) => {
  //使用list  ->lpop
  client.lpop('stars', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})


module.exports = listRouter
