var http=require('http')

var server=http.createServer(handleRequest)

function handleRequest(req,res){
 var dataFormat=req.header['content-type']
}
server.listen(7000,()=>{
  console.log('We are istening on port 7 k')
})