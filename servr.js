var http = require("http");
http.createServer((req,res) =>{
    var store = "";
    req.on("data",chunks => {
        store += chunks;
    })
    req.on("end",() => {
        res.end(store)
    })
}).listen(4000)