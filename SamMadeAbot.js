const twit = require('twit');
require('dotenv/config');

const config ={  
  consumer_key: '9a34Su8Gu3FWZAZh9zIfZTGxY',
  consumer_secret: 'KnPEFV4x4xkmgiQFdpbrOFTUc6OAxlCc8jHyh674JHGEmDJcaK',
  access_token: '1093781965164158976-1CwsW3No82AqxaU5s0krTQsgEMjViC',
  access_token_secret: 'Hjk5XAfQGMLODy75h9We8UHZqwfZGOfbfH0R16sO0gs5G'
}

const Twitter = new twit(config);

//
// post a tweet with media
//
function getImage(){

var request = require('request').defaults({ encoding: null });
console.log("1")
request.get('https://source.unsplash.com/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        bob = new Buffer.from(body).toString('base64');
        console.log(bob)
        Twitter.post('media/upload', { media_data: bob }, function (err, media, response) {
          // now we can assign alt text to the media, for use by screen readers and
          // other text-based presentations and interpreters
          console.log(media)
              // now we can reference the media and post a tweet (media will attach to the tweet)
              var params = { status: ' ', media_ids: media.media_id_string }           
              Twitter.post('statuses/update', params, function (err, tweet, response) {
                console.log(tweet)
              })
            }) 
        }
      })
}


getImage();
setInterval(getImage, 3600000);


  