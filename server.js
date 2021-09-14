const express = require('express')
const {join} = require('path')
const app = express ()

app.get('/', (req,res)=>{
  res.sendFile(join(__dirname,'index.html'))
})


// app.get('/test', (req,res)=>{
//   res.send('<h6>im batman</h6>')
// })

app.listen(3000)

