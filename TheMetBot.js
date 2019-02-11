const twit = require('twit');

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
}

const Twitter = new twit(config);

//
//  get access to the MET API
//

const fetch = require('node-fetch')
//for(let i=1; i<5; i++){
fetch('http://poetrydb.org/title') // Call the fetch function passing the url of the API as a parameter
.then(res => res.json())//response type
.then(data => 
    //Twitter.post('statuses/update', { status: data }, function(err, data, response) {
      console.log(data)
 //})
 )
 .catch(err => console.log(err)
 );

//
//  tweet 'hello world!'
//

//Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
 //   console.log(data)
  //})

  //setInterval(picture, 1000 * 60 * 60 * 6)
  