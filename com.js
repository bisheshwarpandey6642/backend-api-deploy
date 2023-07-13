const http = require("http")
const url = require("url")

// params /node/express

http.createServer( function (req, res) {
    if (req.url === "/profile/amit" && req.method === "GET") {  // routes // endpoints
        res.write("Hi there, This is a Vanilla Node.js API");
        res.end();
    }

    else if (req.url === "/test/com/en" && req.method === "GET") {  /// routes /// endpoint
        res.write("we are in test");
        res.end();
    }

    else {
        const queryObject = url.parse(req.url, true).query

        var num1 = Number(queryObject.temp1)
        var num2 = Number(queryObject.temp2)

        var sum = num1 + num2

        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(JSON.stringify({ message: sum }));
        res.end();
    }
})

.listen(5000, () => {
    console.log(`server started on port: 5000`);
});