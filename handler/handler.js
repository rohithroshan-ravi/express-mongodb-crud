const Model = require("../model/model");

export const creatUser = async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dateToSave = await data.save();
    res.status(200).json({ dateToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getallUser = async (_, res) => {
  try {
    const users = await Model.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getallUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Model.findById(id);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };
  try {
    const updateUserData = await Model.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.status(200).json(updateUserData);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await Model.findByIdAndDelete(id);
    res.status(200).json({
      message: `Document with ${userData.name} has been deleted..`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
