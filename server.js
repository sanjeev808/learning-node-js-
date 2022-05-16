const http = require('http')

const dataHandle = ((req,resp) =>{
     console.log('server started') 
     resp.write("Hello This Sanju Maurya")
    resp.end();
  
})

http.createServer(dataHandle).listen(4000)


// http.createServer((req,resp) =>{
//     resp.write("hello this sanju Maurya")
//     resp.end();
// }).listen(4000)