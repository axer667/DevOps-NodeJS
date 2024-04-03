const http = require("http");

http.createServer(function (request, response) {
    response.write("String 1\n");
    response.write("String 2\n");
    response.write("String 3\n");
    response.end("String end");
}).listen(3000);