const UserServices = require("../services/user.services");


const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUsersById = async (req, res) => {
  try {
    const {id}= req.params;
    const result= await UserServices.getById(id);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = (req, res) => {
  res.json({ message: 'creando un nuevo usuario' });
};

const updateUser = (req, res) => {
  res.json({ message: 'actualizando un usuario' });
};

const deleteUser = (req, res) => {
  res.json({ message: 'eliminando un usuario' });
};

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
}

