const { Router } = require("express");
const userRouter = require("./userRoute");
const studentRoute = require("./studentRoute");
const teacherRoute = require("./teacherRoute");

const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/student", studentRoute);
appRouter.use("/teacher", teacherRoute);

module.exports = appRouter;
