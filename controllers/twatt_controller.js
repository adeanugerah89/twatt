'use strict'

const OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.APPLICATION_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    
var search =(req,res)=>{
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.twitSearch}`,
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret             
    function (e, data){
      let result = [];
      var datas = JSON.parse(data);
      if (e) console.error(e);
      datas.statuses.forEach(element=>{
        result.push(element.user.name);
        result.push(element.text);
      })        
      console.log(result);
      res.send(result)     
    });
}


var timeline = (req,res) =>{
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.twitTimeline}`,
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret             
    function (e, data){ 
      data = JSON.parse(data);
      if (e) console.error(e); 
      console.log(data);       
      res.send(data);
    });
}



module.exports ={
  search,
  timeline,
}
