// JavaScript source code
//this is a script to get a list of all the image/wld file names in a folder.  

  //note that it does not currently use the jpg list it pulls, nor does it verify that every jpg has a matching wld. 
 

var folder = "Matthew/Oct 16";

function getwlds(){
var wlds=[];

$.ajax({
  async: false,
  url: folder,
  success: function(data){
     $(data).find("a:contains(.wld)").each(function(){
        // will loop through 
            var newwld;
             newwld = $(this).attr("href");
             wlds.push(newwld);
             //wlds = wlds + newwld;
       //console.log(wlds);

     });
  }
});
return wlds
//console.log(wlds);
};

var wldlist = getwlds();
//console.log(wldlist);



function getjpgs(){
var jpgs=[];

$.ajax({
  async: false,
  url: folder,
  success: function(data){
     $(data).find("a:contains(.jpg)").each(function(){
        // will loop through 
            var newjpg;
             newjpg = $(this).attr("href");
             jpgs.push(newjpg);


     });
  }
});
return jpgs
//console.log(jpgs);
};

var jpglist = getjpgs();
//console.log(jpglist);

var wldfilenameslist = wldlist[0].split(".");
//console.log(wldfilenameslist);

//console.log(wldfilenameslist[0].split("."););


function getfilenames(arrayoffilenames){
var imagelist = [];
    for( var i=0, len = arrayoffilenames.length; i < len; i++){
       // console.log(arrayoffilenames[i]);
        var temp1 = arrayoffilenames[i].split(".");
        var temp2 = temp1[0].replace("/Matthew/Oct%2016/","");
       // console.log(temp2);
        //console.log(i)
        imagelist.push(temp2);
};
return imagelist;
};

var globalimagelist = getfilenames(wldlist);
