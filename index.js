// var http = require("http");
const express = require("express");
const port = process.env.PORT|| 8080;
const dotenv = require('dotenv');
dotenv.config();

//create a server object:

const axios = require("axios");
const { env } = require("process");

  
const app = express();

app.get("/", (req, res) => {
  
  const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.query.word}/definitions`,
    headers: {
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPID_key
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log(response.data);
    res.send(response.data)
  }).catch(function (error) {
    console.error(error);
  });

});




// console.log(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
