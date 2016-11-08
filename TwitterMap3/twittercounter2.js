// JavaScript source code
////////////////////////////INPUTS///////////////////////////
var filetoread = 'feed_recording_US_ElectionDay2.txt';
var Trumpwords = ['Trump', 'TRUMP', 'trump', 'Donald'];
var Hillarywords = ['hillary', 'Hillary', 'HILLARY', 'Clinton', 'CLINTON', 'clinton', 'imwithher', 'hrc', 'HRC', 'I\'m with her', 'I\'M WITH HER']
var Votewords = ['vote', 'VOTE', 'Vote', 'voting', 'VOTING', 'Voting']


//////////////REPORTING HERE//////////////////
var fs = require('fs');
var tweets = [];

fs.readFile(filetoread, function (err, data) {
    if (err) throw err;
    tweets = data.toString().split("\r\n");
   // console.log(tweets);
    var totalT = KeywordCounter(tweets, Trumpwords);
    console.log("total Trump tweets =" + totalT);
    var totalH = KeywordCounter(tweets, Hillarywords);
    console.log("total Hillary tweets =" + totalH);
    var totalV = KeywordCounter(tweets, Votewords);
    console.log("total vote tweets =" + totalV);
    var totalTweets = tweets.length;
    console.log("total tweets analyzed =" + totalTweets);


});

/////////////////////////////////COUNTER FUNCTION HERE////////////////////////////////
//console.log(tweets);
//console.log(readerout);

function KeywordCounter(tweetarray, keywordarray) {
    var totalmentions = 0;
    var numkeywords = keywordarray.length;
    var filterstring = '(tweetarray[i].indexOf(keywordarray[0]) !=-1';
    for (j = 1; j < keywordarray.length; j++) {
        filterstring = filterstring + ' || tweetarray[i].indexOf(keywordarray[' + j + ']) !=-1';
    };
    filterstring = filterstring + ');';
    //console.log(filterstring);
    //console.log('trump counter started');
   // console.log("array length = " + stringarray.length);
    for (i = 0; i < tweetarray.length; i++) {
        //console.log("i =" + i);
            if (eval(filterstring)) {
                totalmentions = totalmentions + 1
            //console.log("index is " + stringarray[i].indexOf('Trump'));
       }

    };

    return totalmentions
};
