const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api',)
app.listen(4000)