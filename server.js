const express = require('express')
const app = express ()

app.get('/test', (req,res)=>{
  res.send('<h6>im batman</h6>')
})

app.listen(3000)

