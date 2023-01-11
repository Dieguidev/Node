const { Router } = require('express');
const { getAllUsers, getUsersById, createUser, updateUser, deleteUser } = require('../controllers/users.controller')

const router = Router();


//localhost:8000/users
//controlador
router.get('/users', getAllUsers);

router.get('/users/:id', getUsersById);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;