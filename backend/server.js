const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/RouteUsers');
const courseRouter = require('./routes/RouteCourses');

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api',userRouter)
app.use('/api',courseRouter)

app.listen(4000)