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
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithTasks = async (req,res)=>{
  try {
    const {id}=req.params;
    const result = await UserServices.getUserWithTasks(id);
    res.json(result)   //por defecto responde estatus 200
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithTasksWithCategories=async (req,res) =>{

}

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.createUser(newUser);
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UserServices.updateUserById(field, id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUser = (req, res) => {
  res.json({ message: 'eliminando un usuario' });
};

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTasks,
  getUserWithTasksWithCategories
}

