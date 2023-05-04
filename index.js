const express = require("express");
const morgan = require("morgan");
require("./config/db");
const cors = require("cors");
const appRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api", appRouter);

const server = app.listen(5000);

process.on("uncaughtException", () => {
  server.close();
});

process.on("SIGTERM", () => {
  server.close();
});
