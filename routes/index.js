const { Router } = require("express");

const userRouter = require("./userRoute");

const appRouter = Router();

appRouter.use("/user", userRouter);

module.exports = appRouter;
