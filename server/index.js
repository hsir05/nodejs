const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const multiparty = require('multiparty')
const util = require('util')

// const api = require('./api')
const resolve = file => path.resolve(__dirname, file)

app.set('port', (process.env.port || 3000))
app.use(favicon(resolve('../dist/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))
// app.use(api)

app.get('/', (req, res) => {
  res.send('upload')
})

app.get('/api/upload', (req, res) => {
  res.send('upload')
})

app.post('/api/upload', function (req, res, next) {
  // 生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({
    uploadDir: './img'
  })
  // 上传完成后处理
  form.parse(req, function (err, fields, files) {
    var filesTmp = JSON.stringify(files, null, 2)

    if (err) {
      console.log('parse error: ' + err)
    } else {
  //    console.log('parse files: ' + filesTmp)
      console.log(files)
      console.log(filesTmp)
      var inputFile = files.file[0]
      var uploadedPath = inputFile.path
      var dstPath = './img' + inputFile.originalFilename
    //  重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function (err) {
        if (err) {
          console.log('rename error: ' + err)
        } else {
          console.log('rename ok')
        }
      })
    }

    res.writeHead(200, {
      'content-type': 'text/plaincharset=utf-8'
    })
    res.write('received upload:\n\n')
    res.end(util.inspect({
      fields: fields,
      files: filesTmp
    }))
  })
})

app.listen(3000)
console.log('running')
