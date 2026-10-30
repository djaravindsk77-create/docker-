const http = require("node:http");

const port = Number(process.env.PORT) || 3000;
const server = http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("my-app is running\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
