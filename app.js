
const express = require('express');
const request=require('request');
var axios=require('axios');
var config = require('./config');
const app = express();
const port = 9002;
const add='https://api.weixin.qq.com/sns/jscode2session';
var v_data='gggg';
var jcode='jjjj';


// 实现唯一的一个中间件，对于所有请求，都输出 "Response from express"
app.get('/', (req, res) => {
    var params = req.body
    var {code, type} = params
    if (type === 'wxapp') {
      axios.get('https://api.weixin.qq.com/sns/jscode2session', {
        params: {
          appid: config.appId,
          secret: config.appSecret,
          js_code: code,
          grant_type: 'authorization_code'
        }
      }).then(({data}) => {
        var openId = data.openid
      }).then(() => {
        res.send(openId)
      })
    } else {
      throw new Error('未知的授权类型')
    }
  })
.listen(port);

// 监听端口，等待连接



// 输出服务器启动日志
//console.log(`Server listening at http://127.0.0.1:${port}`);
