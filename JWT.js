const json = require("jsonwebtoken");
const secreteKey = "@#$%^&*()_+";

const token = json.sign({ id }, secreteKey, { expiresIn: "1h" });

const tokenForVerify = req.header("Authorization").split(" ")[1];
const decoded = json.verify(tokenForVerify, secreteKey);
