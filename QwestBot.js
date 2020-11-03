// Bot that replies

// Create an Twitter object to connect to Twitter API
// npm install twit
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');
// Making a Twit object for connection to the API
var T = new Twit(config);

var stream = T.stream('statuses/filter', {track:['@QuestSprout']});

console.log("On a qwest");
stream.on('tweet', tweetEvent);

// Replies to a tweet where the stream track handle is tagged in
function tweetEvent(tweet) {
  // Replying to a user should start with their handle
  const reply = "ANSWER HERE"
  var reply_txt = "@" + tweet.in_reply_to_screen_name + reply; 
  // Posts the reply
  T.post('statuses/update', {status: reply_txt}, function(err, data, response) {
    if (err !== undefined) {
      console.log(err);
    } else {
      console.log('Tweeted: ' + reply_txt);
    }
  })
};