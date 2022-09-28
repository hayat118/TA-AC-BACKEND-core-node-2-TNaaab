const { fstat } = require('fs');
var http=require('http')
var server=http.createServer(handleRequest);

function handleRequest(req,res){
  if(req.method==='GET',req.url==='/readme'){
    fs.readFile('./readme.text',(err,content)=>{
      if (err) console.log(err);
     res.setHeader('content-type','text/plain')
      res.end(content)
    })
  }
if(req.method==='GET',req.url==='/readme'){
  res.setHeader('content-type','text/plain')
  fs.createReadStream('./readme.text').pipe(res)
}
}
server.listen(3000,()=>{
  console.log('We are listening oon port 3k');
})