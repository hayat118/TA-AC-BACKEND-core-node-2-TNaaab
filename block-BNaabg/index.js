

var http=require('http')
var server=http.createServer(handleRequest)

var fs=require('fs')
var path=require('path')

var dirPath=path.join(__dirname,'users')

var filePath=`${dirPath}/user1.txt`

fs.writeFileSync(filePath,'this is a text')
fs.readFile(filePath,'utf8',(err,content)=>{
  console.log(content)
})

function handleRequest(req,res){

}
server.listen(3000,()=>{
  console.log('We are listening on port 3k')
})