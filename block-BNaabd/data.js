var http=require('http');
var qs=require('querystring')

var server=http.createServer(handleRequest)

function handleRequest(req,res){
  var store='';
  req.on('data',(chunk)=>{
    store += chunk;
  })
  req.on('end',()=>{
    if(req.method==='POST'&& req.url==='/json'){
      console.log(store);
      res.setHeader('content-type','application/json')
      res.end(store);
    }
    if(req.method==='POST' && req.url==='/form'){
      console.log(store);
      var formData=qs.parse(store)
      res.end(JSON.stringify(formData))
    }
  })
  // console.log(req.headers);
//  var dataFormat=req.header['content-type']
}
server.listen(7000,()=>{
  console.log('We are listening on port 7k')
})