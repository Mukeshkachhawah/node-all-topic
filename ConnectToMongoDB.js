const mongoose = require("mongoose");
const mongoDbConnection = mongoose.connect(
  "mongodb://localhost:27017/yourDatabaseName",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoDbConnection;
