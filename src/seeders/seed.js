const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models')


const users = [
  { username: 'Diego', email: 'diegogaraycullas@gmail.com', password: '1234' },
  { username: 'Miky', email: 'babymiky@gmail.com', password: '1234' },
  { username: 'Ana', email: 'analuisacullas@gmail.com', password: '1234' },
];

const todos = [
  { title: 'Tarea1', description: 'Descripcion para 1', userId: 1 },
  { title: 'Tarea2', description: 'Descripcion para 2', userId: 1 },
  { title: 'Tarea usuario 2', userId: 2 },
  { title: 'Tarea usuario 3', description: 'Descripcion para 3', userId: 3 },
];

//const categories = [];

//const todosCategories = [];

db.sync({ force: true })
  .then(() => {
    console.log('iniciando con el sembradio');
    users.forEach((user) => Users.create(user)); //el create nos dice que estamops insertando informacion dentro de la tabla de usuareios
    setTimeout(()=>{
      todos.forEach(todo=>Todos.create(todo));
    }, 100)
  })
  .catch(error=> console.log(error));