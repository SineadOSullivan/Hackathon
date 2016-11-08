////////////INPUTS/////////////
//location format:  'sw long, sw lat, ne long, ne lat'
//Atlanta: '-84.6,33.3,-83.9,33.9'
//Aleppo: '37.02,36.08, 37.36, 36.31'
//Damascus to Aleppo: ' 35.9, 33.1, 37.4, 36.3'
//CONUS: '-122.34, 28.62, -59.41, 46.567'


var boundingbox = '-122.34, 28.62, -59.41, 46.567';  //Input the bounding box in which to listen
var fileversion = 'US_ElectionDay1';  //input a unique string to append to the end of the log file to make a unique log.  No input will cause the default log to be overwritten. 

/////////////////////MAIN CODE/////////////////////////////////
console.log("Hello I'm Started!");

var TwitterPackage = require('twitter');
var fs = require('fs');

var secret = {
    consumer_key: 'ZCcT5jXriVYifmpIqTTkYYNFZ',
    consumer_secret: 'fLiqgJ5WigaZ7qVl1pQqRUFrIJQa0Q0xxH4LbAWKhp4BxvbXH6',
    access_token_key: '791650315489730564-hl25iwY6OpLqQxSZHeHRytwppW8cMJg',
    access_token_secret: '73qM8ovk3goqpmDglWcWuMSOrcifqqsoa96I4X1kOqZ3u'
}
var Twitter = new TwitterPackage(secret);

var tweetarray = [];
var tweetuser;
var tweettext;
var tweettime;
var tweetloc;
var tweetcoord;
var tweetplace;
var stringtowrite;


var datetime = new Date();
console.log(datetime);
var filename = 'feed_recording_' + fileversion + '.txt';
var headers = 'Screen Name, Tweet Content, Tweet Time, User Location, Coordinates, Tweet Place';
var headerlines =  'This Twitter Feed is Recording for this Bounding Box (sw long, sw lat, ne long, ne lat)  ' + boundingbox + 'Starting at this date and time  '+datetime+ '\r\n' + headers + '\r\n';
fs.writeFile(filename, headerlines, function (err) {
    if (err) return console.log(err);
    console.log('Log File Created');
});
Twitter.stream('statuses/filter', { locations: boundingbox }, function (stream) {
    stream.on('data', function (tweet) {
        //tweetarray.push(tweet.text);
        //locarray.push(tweet.user.location);
        //coordarray.push(tweet.coordinates);
        //console.log(tweet);
        console.log('tweet detected');
        console.log(tweet.user.screen_name);
        console.log(tweet.text);
        console.log(tweet.created_at);
        console.log(tweet.user.location);
        console.log(tweet.coordinates);
        console.log(tweet.place.full_name);

        tweetuser = tweet.user.screen_name;
        tweettext = tweet.text;
        tweettime = tweet.created_at;
        tweetloc = tweet.user.location;
        tweetcoord = tweet.coordinates;
        tweetplace = tweet.place.full_name;

        stringtowrite = '\"' +tweetuser +'\"' + ',' + '\"' + tweettext + '\"' + ',' +'\"'+tweettime +'\"'+ ','  +'\"'+tweetloc+'\"' + ',' +'\"'+ tweetcoord+'\"' + ',' +'\"' +tweetplace+'\"';
        tweetarray.push([tweetuser, tweettext, tweettime, tweetloc, tweetcoord, tweetplace]);
        fs.appendFile(filename, stringtowrite + '\r\n', function (err) {
            if (err) throw err;
            console.log('tweet saved to log');
        });

    });
     
    stream.on('error', function (error) {
        console.log(error);
    });
  
});


