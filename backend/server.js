const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/RouteUsers');
const courseRouter = require('./routes/RouteCourses');
const commentsRouter = require('./routes/RouteComments');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api', courseRouter);
app.use('/api', commentsRouter);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

















// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const userRouter = require('./routes/RouteUsers');
// const courseRouter = require('./routes/RouteCourses');
// const commentsRouter = require('./routes/RouteComments');

// const app = express()
// app.use(cors())
// app.use(bodyParser.json())
// app.use('/api',userRouter)
// app.use('/api',courseRouter)
// app.use('/api',commentsRouter)

// app.listen(4000)