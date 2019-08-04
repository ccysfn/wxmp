
const express = require('express');
const request=require('request');
var axios=require('axios');
var config = require('./config');
const app = express();
const port = 9002;
const add='https://api.weixin.qq.com/sns/jscode2session';
var v_data={}

// 实现唯一的一个中间件，对于所有请求，都输出 "Response from express"
app.get('/',(req,res)=>{
  //res.send(req.param('code'));
	var jcode=req.param('code');
   // res.send(jcode);
	 axios.get('https://api.weixin.qq.com/sns/jscode2session',{
		params:{
			appid:config.appId,
			secret:config.appSecret,
			js_code:jcode,
			grant_type:'authorization_code'
		
		}
	
	}).then(function(res){
  console.log(res.data);//处理成功的函数 相当于success
  v_data=res.data
})

res.send(v_data);
   

}).listen(port);

// 监听端口，等待连接



// 输出服务器启动日志
//console.log(`Server listening at http://127.0.0.1:${port}`);
