const dns = require("dns");

dns.lookup("www.google.com", { family: 4 }, (err, address, family) => {
  console.log("Address: ", address);
  console.log("Family: ", family);
  console.log("Error: ", err);
});

module.exports = dns;
