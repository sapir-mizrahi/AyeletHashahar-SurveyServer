const express = require('express')
const cors = require("cors");
const routeSurvey = require('./routers/survey')
const routeUser = require('./routers/user')
const routeContact = require('./routers/contact')
const routeStatisticAnswers = require('./routers/statisticAnswers')
const bodyParser = require('body-parser')


const app = express()
const port = 8000
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.use(bodyParser.json())

app.use('/survey', routeSurvey)
app.use('/user', routeUser)
app.use('/statistic', routeStatisticAnswers)
// app.use('/message', routeContact)
// app.use('/managerMessages', routeManagerMessages)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
}

const mongoose = require('mongoose');
const db = require('./models/index');
db.mongoose.set('strictQuery', true);
db.mongoose.connect(db.url, options)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

