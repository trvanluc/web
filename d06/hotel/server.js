const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "public",
        req.url === "/" ? "index.html" : req.url
    );

    const ext = path.extname(filePath).toLowerCase();

    const contentTypeMap = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".ico": "image/x-icon"
    };

    const contentType = contentTypeMap[ext] || "text/plain";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("Not Found");
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});