const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/RouteUsers');
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api',userRouter)
app.listen(4000)