# node

## express

```
安装命令中的 “-g” 表示全局(global)
express的版本不是通常的 “-v” 来查看，而是 “-V”
安装express项目的命令如下
express -e nodejs-product
-e, --ejs add ejs engine support
-J, --jshtml add jshtml engine support (defaults to jade)
```

## supervisor

每次修改代码后会自动重启。懒程序员就指望这种省事省力的工具活着了:)

```
　　安装：npm install -g supervisor
　　执行：supervisor app.js
```

## forever

```
虚拟机一关node服务就关了，不过forever可以让node服务不停止，介绍如下，安装和执行不细说啦，我懒：
　　forever是一个简单的命令式nodejs的守护进程，能够启动，停止，重启App应用。forever完全基于命令行操作，在forever进程之下，创建node的子进程，通过monitor监控node子进程的运行情况，一旦文件更新，或者进程挂掉，forever会自动重启node服务器，确保应用正常运行。
```

## seve-favicon 中间件

用于请求网页的logo

**安装**

```
 npm install serve-favicon --save
```

example

```
var express = require('express')
var favicon = require('serve-favicon')
var path = require('path')

var app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Add your routes here, etc.

app.listen(3000)
```

## body-parser

请求体解析中间件

```
npm install body-parser --save
```

**用法**

```
// 创建 application/json 解析
var jsonParser = bodyParser.json()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login 获取 URL编码的请求体
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

// POST /api/users 获取 JSON 编码的请求体
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
});
```

**API**

```
1\. bodyParser.json(options): 解析json数据
2\. bodyParser.raw(options): 解析二进制格式(Buffer流数据)
3\. bodyParser.text(options): 解析文本数据
4\. bodyParser.urlencoded(options): 解析UTF-8的编码的数据。
```

## cookie-parser

读取解析 cookie-parser

```
 npm install cookie-parser --save
```

## multiparty

图片上传中间件

```
  npm install multiparty
```

```
  var multiparty = require('multiparty');
  var http = require('http');
  var util = require('util');

http.createServer(function(req, res) {
 if (req.url === '/upload' && req.method === 'POST') {
   // parse a file upload
   var form = new multiparty.Form();

   form.parse(req, function(err, fields, files) {
     res.writeHead(200, {'content-type': 'text/plain'});
     res.write('received upload:\n\n');
     res.end(util.inspect({fields: fields, files: files}));
   });

   return;
 }

 // show a file upload form
 res.writeHead(200, {'content-type': 'text/html'});
 res.end(
   '<form action="/upload" enctype="multipart/form-data" method="post">'+
   '<input type="text" name="title"><br>'+
   '<input type="file" name="upload" multiple="multiple"><br>'+
   '<input type="submit" value="Upload">'+
   '</form>'
 );
}).listen(8080);
```
