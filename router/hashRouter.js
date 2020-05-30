const express = require('express')
const client = require('../db')
/*
* Redis中存储的hash结构只能是key:string,value:string
* 1.如果此昂存储嵌套的数据 例如:
*   let student = {name:'jack',hobbies:['吃饭','睡觉'],girlfriend:{...}}
*   只能将嵌套的value先序列化成字符串然后再存入redis数据库中
* */
const hashRouter = express.Router()

hashRouter.post('/add', (req, res) => {
  //创建对象(简单对象key:string value:string)
  client.hmset('user', {name: '波多野结衣', age: 33}, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

hashRouter.post('/add_object', (req, res) => {
  //创建对象(嵌套对象key:string value:object)
  const user_object = {
    name: '波多野结衣', age: 33,
    hobby: JSON.stringify(['吃饭', '睡觉', '打豆豆'])
  }
  client.hmset('user_object', user_object, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

hashRouter.get('/all', (req, res) => {
  //获取对象(简单对象key:string value:string)
  client.hgetall('user', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

hashRouter.get('/all_object', (req, res) => {
  //获取对象(嵌套对象key:string value:object)
  client.hgetall('user_object', (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = hashRouter
