const express = require('express')

const client = require('../db')

const userRouter = express.Router()

userRouter.post('/add', (req, res) => {
  client.hmset('user', {name: '波多野结衣', age: 33}, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = userRouter

