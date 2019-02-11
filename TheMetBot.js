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


//
// post a tweet with media
//
var b64content = fs.readFileSync('https://source.unsplash.com/random', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "PicBot"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'test', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})

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
  