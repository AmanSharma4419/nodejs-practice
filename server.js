var http = require("http");
var fs = require("fs")
http.createServer((req,res) => {
if(req.url === "/") {
    fs.readFile("index.html","utf8",(error,content) => {
        res.writeHead("200",{"content-type":"text/html"});
        res.write(content);
        res.end();
    });
    } else if (req.url==="/about") {
        fs.readFile("about.html","utf8",(error,content) => {
            res.writeHead("201",{"content-type":"text/html"});
            res.write(content);
            res.end();
        });
    }
}).listen(3000); 