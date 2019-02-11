const twit = require('twit');
require('dotenv/config');

const config ={  
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const Twitter = new twit(config);

//
// post a tweet with media
//

//insérez ce bout de code au début de votre code pour observer les changements de hash dans l'URL

///////////////////////////////////////////////////////////////////////
function getImageButAnotherWay(){
  const request = require('request');
  request('https://images.unsplash.com/photo-1547261380-ee8e1fbf2a7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', {json: true}, (err,res,body) => {
    if(err) {return console.log(err);}
    console.log(body.url);
    console.log(body.explanation);
  });
}

function getImageTheGoodWay(){
  const curl = new (require( 'curl-request' ))();
  
  curl.setHeaders([
    'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
]) 
  .get('https://images.unsplash.com/photo-1547261380-ee8e1fbf2a7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9')
.then(({statusCode, body, headers}) => {
  
})
.catch((e) => {
    console.log(e);
});
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function getImage(){
//const request = require('request');

var request = require('request').defaults({ encoding: null });
console.log("1")
request.get('https://source.unsplash.com/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        bob = "data:" + response.headers["content-type"] + ";base64," + new Buffer.from(body).toString('base64');
        console.log(bob)
        Twitter.post('media/upload', { media_data: bob }, function (err, media, response) {
          // now we can assign alt text to the media, for use by screen readers and
          // other text-based presentations and interpreters
          console.log("3")
          console.log(media)
          console.log("4")
              // now we can reference the media and post a tweet (media will attach to the tweet)
              var params = { status: ' ', media_ids: media.media_id_string }
              console.log("5")
              Twitter.post('statuses/update', params, function (err, tweet, response) {
                console.log("6")
                console.log(tweet)
              })
            }) 
        }
      })
}

/*
    var option = {
      directory: "D:/Users/Sam/Pictures/Bot/",
      filename: "test.jpg"
    }
    console.log(option)
    
    download(img,option, function(err){
      if(err) throw err,
      console.log("error")
    })

  });*/
/*
var url = "https://images.unsplash.com/photo-1547261380-ee8e1fbf2a7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" 
          //"https://source.unsplash.com/random"
console.log(url)

var option = {
  directory: "D:/Users/Sam/Pictures/Bot/",
  filename: "test.jpg"
}
console.log(option)

download(url,option, function(err){
  if(err) throw err,
  console.log("error")
})*/


function postImage(){
const fs = require('fs');
var b64content = fs.readFileSync('D:/Users/Sam/Pictures/Bot/test.jpg', { encoding: 'base64' })

// first we must post the media to Twitter
Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string                                                                         
  var altText = "PicBot"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  Twitter.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: ' ', media_ids: [mediaIdStr] }

      Twitter.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})
}

getImage();
//getImageButAnotherWay()
//getImageButThirdWay()
//getImageTheGoodWay();

//oscour();

//setTimeout(postImage,5000);

///////////////////////////////////////////////////////////////////////////////

/*
var url = 'https://source.unsplash.com/random';
var pic = console.createElement('img');
pic.src = url;

  Twitter.post('statuses/update', { status: pic }, function(err, data, response) {
    console.log(pic)
})
*/

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
  