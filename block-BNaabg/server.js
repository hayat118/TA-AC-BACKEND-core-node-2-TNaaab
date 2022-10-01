var http = require('http');

var qs = require('querystring')

var fs = require('fs')

var path = require('path')

var url = require('url');

var server = http.createServer(handleRequest)

const userDir = path.join(__dirname, "users/");
function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url, true)
    var store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    })
    req.on('end', () => {

        if (req.method === "POST" && req.url === "/users") {
            console.log(store);
            var userName = JSON.parse(store).username;
            console.log(userName);
            fs.open(userDir + userName + ".json", "wx", (err, fd) => {
                fs.writeFile(fd, store, (err) => {
                    if (err) return console.log(err);
                    fs.close(fd, (err) => {
                        res.end(`${userName} successfully created`);
                    });
                });
            });

        }
    })
    if (parsedUrl.pathname === "/users" && req.method === "GET") {
        var username = parsedUrl.query.username
        fs.readFile(userDir + username + '.json', (err, content) => {
            if (err) return console.log(err);
            res.setHeader('Content-Type', 'application/json');
            console.log(content.toString());
            return res.end(content)
           
        });
    }
    if (parsedUrl.pathname === "/users" && req.method === "PUT") {
        var username = parsedUrl.query.username;
        fs.open(userDir + username + '.json', 'r+', (err, fd) => {
            if (err) return console.log(err)
            fs.ftruncate(fd, (err) => {
                if (err) return console.log(err)
                fs.writeFile(fd, store, (err) => {
                    if (err) return console.log(err)
                    fs.close(fd, () => {
                        return res.end(`${username} updated successfully`)
                    })
                })
            })
        })
    }
    if (parsedUrl.pathname === "/users" && req.method === "DELETE") {
        var username = parsedUrl.query.username;
        fs.unlink(userDir + username + '.json', (err) => {
            if (err) return console.log(err);
            return res.end(`${username} is deleted`)
        })
    }
    res.statusCode = 404;
    res.end('Page Not Found')
}

server.listen(3333, () => {
    console.log('WELCOME in server 3333')
})