const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { PORT } = require("./config");
const connect = require("./db/mongo");
const listController = require("./controllers/list");

(async () => {
  const app = express();

  app.use(morgan("dev"));
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/list", listController);

  await connect();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
