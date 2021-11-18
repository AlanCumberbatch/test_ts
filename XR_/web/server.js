
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// var http = require('http')                     //这里用node.js的一个内置模块叫http。
// //用require去加载这个模块。这个模块就是个对象平台，提供了方法。
// http.createServer(function(req,res){
//   console.log(req)
//   res.write('hello world')
//   res.end()
// })                   //创建服务器，这里有个回调,server函数内部实际上就是个异步的过程，
// //内部会创建一个服务器，创建好之后，它会把里面的function的那个函数作为对应的参数来处理我们的请求。
// //换句话说，创建好服务器后，当我通过浏览器访问这个服务器时，
// //请求底层会被封装成一个对象，对象就是这里的req参数，请求信息都在这个对象里。
// //通过req获取用户相关信息，IP，域名，访问信息，，，
// //res服务器返回给浏览器的信息，这么一个对象。
var http = require('http')
var fs = require('fs')
var ar_html = fs.readFileSync('./arjs.html', 'binary');
var server = http.createServer(function(req,res){
    res.write(ar_html, 'binary')            //发给浏览器的http内容
     res.end()                        //结束了
})
server.listen(9000)      //创建这个服务器后，用.listen这个方法去启动这个服务器，去监听9000这个端口。