const { Router } = require("express");
const {
  addteacher,
  getTeacherData,
  deleteTeacherData,
  getTeacherDatabyID,
  updateTeacherData,
  searchTeacher,
} = require("../controllers/teacherController");
const authMiddleware = require("../middleware/auth");

const teacherRoute = Router();

teacherRoute.use(authMiddleware);

teacherRoute.route("/").post(addteacher).get(getTeacherData);

teacherRoute
  .route("/:id")
  .delete(deleteTeacherData)
  .get(getTeacherDatabyID)
  .put(updateTeacherData);

teacherRoute.get("/search/:key", searchTeacher);

module.exports = teacherRoute;
