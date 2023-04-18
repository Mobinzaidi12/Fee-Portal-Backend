const express = require("express");
require("./config/db");
const cors = require("cors");
const appRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", appRouter);

app.listen(5000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is runing");
  }
});
