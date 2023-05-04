const { Router } = require("express");
const {
  addStudent,
  getStudentData,
  deleteStudentData,
  getStudentDataByID,
  updateStudentData,
  searchStudent,
} = require("../controllers/studentController");
const studentRoute = Router();

studentRoute.post("/add-student", addStudent);

studentRoute.get("/student-data", getStudentData);

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
