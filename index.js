const express = require('express')
const client = require('./db')
const userRouter = require('./router/userRouter')
const stringRouter = require('./router/stringRouter')
const hashRouter = require('./router/hashRouter')
const listRouter = require('./router/listRouter')

const app = express()

app.use('/user', userRouter)
app.use('/string', stringRouter)
app.use('/hash', hashRouter)
app.use('/list', listRouter)

const port = 5400

client.on('error', () => {
  console.log('redis connect error')
})

client.on('connect', () => {
  console.log('redis connect success')
  app.listen(port, () => {
    console.log(`app is running port ${port}`)
  })
})
