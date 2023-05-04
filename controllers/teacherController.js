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

module.exports = { addteacher };
