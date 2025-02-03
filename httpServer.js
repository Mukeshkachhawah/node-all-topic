const http = require("http");
const server = http.createServer((req, res) => {
  res.end("i'm a http server");
});
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
