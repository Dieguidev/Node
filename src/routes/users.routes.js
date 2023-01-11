const { Router } = require('express');
const { getAllUsers, getUsersById, createUser, updateUser, deleteUser, getUserWithTasks, getUserWithTasksWithCategories } = require('../controllers/users.controller')

const router = Router();


//localhost:8000/users
//controlador
router.get('/users', getAllUsers);

router.get('/users/:id', getUsersById);

//obtener a un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);

//obtener usuario con sus tareas con sus categorias
router.get ('users/:id/todos/categories', getUserWithTasksWithCategories);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;