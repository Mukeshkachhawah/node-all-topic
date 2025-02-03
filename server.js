const express = require("express");
const server = express();
const { dns } = require("./dns.lookup");

server.get("/", (req, res) => {
  
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
