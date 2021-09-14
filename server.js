const express = require('express')
const {join} = require('path')
const app = express ()

app.use(express.static(join(__dirname,'public')))

// app.get('/', (req,res)=>{
//   res.sendFile(join(__dirname,'index.html'))
// })

// app.get('/test', (req,res)=>{
//   res.sendFile(join(__dirname, 'test.html'))
// })

const users=[
  {
  "name": "john doe",
  "age": 47
}
]

app.get('/users', (req,res)=>{
  res.json(users)
})

app.listen(3000)
