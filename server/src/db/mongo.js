const mongoose = require("mongoose").default;
const { MONGO_URI } = require("../config");

async function connect() {
  await mongoose.connect(MONGO_URI);

  console.log("Connected to MongoDB");

  mongoose.connection.on("error", (err) => {
    console.log("Error in MongoDb connection:", err);
  });
}

module.exports = connect;
