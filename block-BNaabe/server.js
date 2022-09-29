var http=require('http')

var server=http.createServer(handleRequest);

function handleRequest(req,res){
  var store='';
  req.on('data',(chunk)=>{
    store += chunk;
  })
  req.on('end',()=>{
    if(req.method==='POST' && req.url==='/json'){
      console.log(store)
      res.setHeader('Content-Type','application/json')
      res.end(store)
    }
  })
}
server.listen(3000,()=>{
  console.log('We are listening on port 3k')
})