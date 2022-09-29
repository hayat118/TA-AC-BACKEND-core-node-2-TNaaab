
// path

var path=require('path');

var relativePath='./index.js';
var absolutePath=__dirname;

var indexPath=path.join(__dirname,'./index.js');
console.log(__dirname,indexPath);
console.log(__filename);

// server

var http=require('http');
var fs=require('fs');

var server=http.createServer(handleRequest);

function handleRequest(req,res){
 if(req.method==='GET' && req.url==='/form'){
   fs.readFile('./form.html',(err,content)=>{
     if (err) console.log(err);
     res.setHeader('Content-Type','text/html')
     res.end(content)
   })
 }
 if(req.method==='POST' && req.url==='/form'){
     res.setHeader('Content-Type','text/html')
     fs.createReadStream('./form').pipe(res)
    //  res.end(content)

 }
}
server.listen(5678,()=>{
  console.log('We are listening on port 5678')
})