const express = require('express')
const app = express()
const routes = require('./routes/index')
const port = 3000

app.use(express.json())

routes(app)

app.listen(port,()=>{
  console.log(`Express server is listening at http://localhost:${port}`)
})