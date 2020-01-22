const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)
// app.use('./users'. userRoute)

//Routes
app.get('/', (req,res) => {
  res.send('We are on home');
});

//Connect to DB
mongoose.connect(
  process.env.DB_Connection, 
  { useNewUrlParser: true },
  () => console.log('Connected to DB!')
);

app.listen(3000);