const http = require("http");

const server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is student Page.</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
