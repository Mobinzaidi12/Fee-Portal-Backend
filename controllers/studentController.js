const Student = require("../models/Student");

const addStudent = async (req, res) => {
  try {
    const {
      grNumber,
      name,
      fatherName,
      contactNumber,
      address,
      className,
      dob,
      group,
      gender,
      fatherContactNumber,
    } = req.body;
    let studentData = await Student.create({
      grNumber,
      name,
      fatherName,
      contactNumber,
      address,
      className,
      dob,
      group,
      gender,
      fatherContactNumber,
    });

    res.status(200).json({
      status: true,
      message: "student created successfully",
      data: studentData,
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getStudentData = async (req, res) => {
  try {
    let studentData = await Student.find();
    if (studentData.length < 1) {
      return res.json({ status: false, message: "Data not Found" });
    }
    res.send(studentData);
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const deleteStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.findByIdAndDelete(id);
    res.status(200).send({ status: true, message: "Student Data deleted" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getStudentDataByID = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Student.findById(id);
    res.status(200).send({ status: true, data });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const updateStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      grNumber,
      name,
      fatherName,
      contactNumber,
      address,
      className,
      dob,
      group,
      gender,
      fatherContactNumber,
    } = req.body;

    const data = await Student.updateOne(
      { _id: id },
      {
        $set: {
          grNumber,
          name,
          fatherName,
          contactNumber,
          address,
          className,
          dob,
          group,
          gender,
          fatherContactNumber,
        },
      }
    );
    res.status(200).send({ status: true, message: "Student Data update" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const searchStudent = async (req, res) => {
  try {
    const { key } = req.params;
    const data = await Student.find({
      $or: [
        { grNumber: { $regex: key } },
        { name: { $regex: key } },
        { fatherName: { $regex: key } },
        { contactNumber: { $regex: key } },
        { address: { $regex: key } },
        { className: { $regex: key } },
        { dob: { $regex: key } },
        { group: { $regex: key } },
        { gender: { $regex: key } },
        { fatherContactNumber: { $regex: key } },
      ],
    });
    res.status(200).send({ status: true, data });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addStudent,
  getStudentData,
  deleteStudentData,
  getStudentDataByID,
  updateStudentData,
  searchStudent,
};
