const express = require('express');
const querystring = require('querystring');

require("dotenv").config()
var cors = require('cors')

const router = require('./routes/router.js')

const app = express();
app.use(cors())

//set up for receiving JSON bodys in routes
app.use(express.json());

//add router to app
app.use(router)

//render page with text to test if running
app.get('/',(req,res)=>{
  res.send('Devs b-e app running')
});

const port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("server started on ",process.env.ENVIRONMENT, port)
});

