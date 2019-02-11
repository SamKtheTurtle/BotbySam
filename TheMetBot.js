const twit = require('twit');

const config = {
  consumer_key: '9a34Su8Gu3FWZAZh9zIfZTGxY', //process.env.consumer_key,
  consumer_secret: 'KnPEFV4x4xkmgiQFdpbrOFTUc6OAxlCc8jHyh674JHGEmDJcaK',//process.env.consumer_secret,
  access_token: '1093781965164158976-1CwsW3No82AqxaU5s0krTQsgEMjViC',//process.env.access_token,
  access_token_secret: 'Hjk5XAfQGMLODy75h9We8UHZqwfZGOfbfH0R16sO0gs5G' //process.env.access_token_secret
}

const Twitter = new twit(config);

//
//  get access to the MET API
//

  var img ='https://source.unsplash.com/random';
  Twitter.post('statuses/update', { status: img }, function(err, data, response) {
    console.log(img)
})


/*
const fetch = require('node-fetch')
fetch('https://source.unsplash.com/random') // Call the fetch function passing the url of the API as a parameter
.then(res => res.json())//response type
.then(data => 
    Twitter.post('statuses/update', { status: data }, function(err, data, response) {
      console.log(data)
 })
 )
 .catch(err => console.log(err)
 );
*/
//
//  tweet 'hello world!'
//

//Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
 //   console.log(data)
  //})

  //setInterval(picture, 1000 * 60 * 60 * 6)
  