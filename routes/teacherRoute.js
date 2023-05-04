const { Router } = require("express");
const { addteacher } = require("../controllers/teacherController");

const teacherRoute = Router();

teacherRoute.post("/add-teacher", addteacher);

module.exports = teacherRoute;
