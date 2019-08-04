// 引用 express 来支持 HTTP Server 的实现
const express = require('express');
const request=require('request');
var axios=require('axios');
// 创建一个 express 实例
const app = express();
const id='wx9c317e7b510ea0fc';
const appsecret='81521afadfbd64b90ae2090558463f0c';
const add='https://api.weixin.qq.com/sns/jscode2session';
const grant='authorization_code';
// 实现唯一的一个中间件，对于所有请求，都输出 "Response from express"
app.get('/',function(req,res){
  //res.send(req.param('code'));
	var jcode=req.param('code');
	axios.get('https://api.weixin.qq.com/sns/jscode2session',{
		params:{
			appid:id,
			secret:appsecret,
			js_code:jcode,
			grant_type:'authorization_code'
		
		}
	
	}).then((function(response){
	console.log(response)
	
	})
   

});

// 监听端口，等待连接
const port = 9002;
app.listen(port);

// 输出服务器启动日志
console.log(`Server listening at http://127.0.0.1:${port}`);
