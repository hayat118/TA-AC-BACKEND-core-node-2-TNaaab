var http=require('http')
var qs=require('querystring')

var server=http.createServer(handleRequest)

function handleRequest(req,res){
  var store=''
  req.on('data',(chunk)=>{
    store += chunk
  })
  req.on('end',()=>{
    if(req.method==='POST' && req.url==='/json'){
    console.log(store);
    var formData=qs.parse(store)
    res.end(JSON.stringify(formData))
  }
  })

}
server.listen(9000,()=>{
  console.log('We are listening on port 9k')
})