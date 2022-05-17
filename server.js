const http = require('http')
const data = require('./Data')
// const dataHandle = ((req,resp) =>{
//      console.log('server started') 
//      resp.write("Hello This Sanju Maurya")
//     resp.end();
  
// })

// http.createServer(dataHandle).listen(4000)


http.createServer((req,resp) =>{
    resp.writeHead(200,{'Content-type':'application/json'});
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(4000)