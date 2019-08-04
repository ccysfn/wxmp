
const express = require('express');
const request=require('request');
var axios=require('axios');
var config = require('./config');
const app = express();
const port = 9002;
const add='https://api.weixin.qq.com/sns/jscode2session';

// 实现唯一的一个中间件，对于所有请求，都输出 "Response from express"
app.get('/',(req,res)=>{
  //res.send(req.param('code'));
	var jcode=req.param('code');
	axios.get('https://api.weixin.qq.com/sns/jscode2session',{
		params:{
			appid:config.appId,
			secret:config.appSecret,
			js_code:jcode,
			grant_type:'authorization_code'
		
		}
	
	}).then(({data})=>{
	var openId = data.openid
	console.log('success')
	}).then(() => {
        res.send({
          code: 0
        })
   

}).listen(port);

// 监听端口，等待连接



// 输出服务器启动日志
//console.log(`Server listening at http://127.0.0.1:${port}`);
