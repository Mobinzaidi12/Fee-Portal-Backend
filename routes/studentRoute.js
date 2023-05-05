const { Router } = require("express");
const {
  addStudent,
  getStudentData,
  deleteStudentData,
  getStudentDataByID,
  updateStudentData,
  searchStudent,
} = require("../controllers/studentController");
const authMiddleware = require("../middleware/auth");
const studentRoute = Router();

studentRoute.use(authMiddleware);

studentRoute.route("/").post(addStudent).get(getStudentData);

studentRoute
  .route("/:id")
  .get(getStudentDataByID)
  .put(updateStudentData)
  .delete(deleteStudentData);

// studentRoute.delete("/:id", deleteStudentData);

// studentRoute.get("/:id", getStudentDataByID);

// studentRoute.put("/:id", updateStudentData);

studentRoute.get("/search/:key", searchStudent);

module.exports = studentRoute;
