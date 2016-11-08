// JavaScript source code
var fs = require('fs');
var filetoread = 'feed_recording_US_ElectionDay1.txt';
var tweets = [];


fs.readFile(filetoread, function (err, data) {
    if (err) throw err;
    tweets = data.toString().split("\r\n");
   // console.log(tweets);
    var totalT = TrumpCounter(tweets);
    console.log("total Trump tweets =" + totalT);
    var totalH = HillaryCounter(tweets);
    console.log("total Hillary tweets =" + totalH);
    var totalV = VoteCounter(tweets);
    console.log("total vote mentions =" + totalV)
    var totalTweets = tweets.length;
    console.log("total tweets analyzed =" + totalTweets);

});


//console.log(tweets);
//console.log(readerout);

function TrumpCounter(stringarray) {
    var Trumpmentions = 0;
    //console.log('trump counter started');
   // console.log("array length = " + stringarray.length);
    for (i = 0; i < stringarray.length; i++) {
        //console.log("i =" + i);
        if (stringarray[i].indexOf('Trump') != -1 || stringarray[i].indexOf('TRUMP') != -1 || stringarray[i].indexOf('trump') != -1) {
            Trumpmentions = Trumpmentions + 1;
            //console.log("index is " + stringarray[i].indexOf('Trump'));
        }

    };

    return Trumpmentions
};


function HillaryCounter(stringarray) {
    var Hillarymentions = 0;
    //console.log('trump counter started');
    // console.log("array length = " + stringarray.length);
    for (i = 0; i < stringarray.length; i++) {
        //console.log("i =" + i);
        if (stringarray[i].indexOf('Hillary') != -1 || stringarray[i].indexOf('Clinton') != -1 || stringarray[i].indexOf('HILLARY') != -1 || stringarray[i].indexOf('CLINTON') != -1 || stringarray[i].indexOf('hillary') != -1 || stringarray[i].indexOf('clinton') != -1 || stringarray[i].indexOf('imwithher') != -1 || stringarray[i].indexOf('hrc') != -1 || stringarray[i].indexOf('HRC') != -1) {
            Hillarymentions = Hillarymentions + 1;
            //console.log("index is " + stringarray[i].indexOf('Trump'));
        }

    };

    return Hillarymentions
};


function VoteCounter(stringarray) {
    var Votementions = 0;
    //console.log('trump counter started');
    // console.log("array length = " + stringarray.length);
    for (i = 0; i < stringarray.length; i++) {
        //console.log("i =" + i);
        if (stringarray[i].indexOf('Vote') != -1 || stringarray[i].indexOf('VOTE') != -1 || stringarray[i].indexOf('vote') != -1 || stringarray[i].indexOf('voting') != -1 || stringarray[i].indexOf('Voting') != -1 || stringarray[i].indexOf('VOTING') != -1) {
            Votementions = Votementions + 1;
            //console.log("index is " + stringarray[i].indexOf('Trump'));
        }

    };

    return Votementions
};

//console.log("the TOTAL is =" + total);
//var total = TrumpCounter(tweets);
//console.log(Trumpmentions);
//console.log(total);