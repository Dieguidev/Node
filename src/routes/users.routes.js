const { Router } = require('express');
const { getAllUsers, getUsersById, createUser, updateUser, deleteUser, getUserWithTasks, getUserWithTasksWithCategories, getUserWithCategories } = require('../controllers/users.controller')

const router = Router();


//localhost:8000/users
//controlador
router.get('/users', getAllUsers);

router.get('/users/:id', getUsersById);

//obtener a un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);

//obtener usuario con sus tareas con sus categorias
router.get('/users/:id/todos/categories', getUserWithTasksWithCategories);

//llamando las categorias por usuario
router.get('/users/:id/categories', getUserWithCategories);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;