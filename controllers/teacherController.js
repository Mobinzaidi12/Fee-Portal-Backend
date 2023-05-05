const Teacher = require("../models/Teacher");

const addteacher = async (req, res) => {
  try {
    const { name, contactNumber, address, doj, subject } = req.body;

    const teacherData = await Teacher.create({
      name,
      contactNumber,
      address,
      doj,
      subject,
    });
    res
      .status(200)
      .json({ status: true, message: "Data insert", data: teacherData });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getTeacherData = async (req, res) => {
  try {
    const data = await Teacher.find();
    if (data.length < 1) {
      return res.status(404).json({ status: false, message: "Data not Found" });
    }
    res.status(200).json({ status: true, data });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const deleteTeacherData = async (req, res) => {
  try {
    let { id } = req.params;
    const data = await Teacher.findByIdAndDelete(id);
    res.status(200).json({ status: true, message: "Data Deleted" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getTeacherDatabyID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Teacher.findById(id);
    res.status(200).json({ status: true, data });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const updateTeacherData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contactNumber, address, doj, subject } = req.body;
    const updateData = await Teacher.updateOne(
      { _id: id },
      { $set: { name, contactNumber, address, doj, subject } }
    );
    res.status(200).send({ status: true, message: "Teacher Data update" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const searchTeacher = async (req, res) => {
  try {
    const { key } = req.params;
    const searchData = await Teacher.find({
      $or: [
        { name: { $regex: key } },
        { contactNumber: { $regex: key } },
        { address: { $regex: key } },
        { doj: { $regex: key } },
        { subject: { $regex: key } },
      ],
    });
    res.status(200).json({ status: true, searchData });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addteacher,
  getTeacherData,
  deleteTeacherData,
  getTeacherDatabyID,
  updateTeacherData,
  searchTeacher,
};
