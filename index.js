const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Fruits = require('./models/fruits')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './fruit-list.db' })
const fruits = Fruits(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// Criar fruta.
app.post('/fruits', async (req, res) => {
  const body = req.body;

  await fruits.create({ 
    name: body.name, 
    fruit_type: body.fruit_type, 
    fruit_color: body.fruit_color 
  });
  res.json(body)
});

// Obter lista de frutas.
app.get('/fruits', async (req, res) => {
  const frutas = await fruits.findAll();
  console.log(frutas.find)
  res.json({ frutas });
});

// Obter fruta em específico e os seus dados.
app.get('/fruits/:id', async (req, res) => {
  const idFruit = req.params.id;
  const body = await fruits.findAll({ where: { id: idFruit } });

  res.json(body);
  // res.send({ idFruit: idFruit })
});


// Atualizar uma fruta
app.put('/fruits/:id', async (req, res) => {
  const idFruit = req.params.id;
  // const body = req.body;

  await fruits.update({
    name: req.body.name, 
    fruit_type: req.body.fruit_type,
    fruit_color: req.body.fruit_color
  },
  { 
    where: { 
      id: idFruit 
    } 
  });

  res.json({ message: 'Fruta atualizada', name: req.body.name ,idFruit: idFruit })
});

// Deletar uma fruta :(
app.delete('/fruits/:id', async (req, res) => {
  const idFruit = req.params.id;

  await fruits.destroy({ 
    where: { 
      id: idFruit 
    } 
  })

  res.json({ message: "Fruta deletada", id_Fruta_Deletada: idFruit })
});










// // List tasks
// app.get('/tasks', async (req, res) => {
//   // Isso aqui é mais fácil :P
//   const resultados = await tasks.findAll()
//   // const resultados = await tasks.findAll({ limit: 1 })

//   // De vez em quando esse também é... mas vai complicar...
//   // const [resultados, metadata] = await sequelize.query("SELECT id, description FROM tasks;")

//   // console.log(resultados)

//   // res.json({ action: 'Listing tasks' })
//   // res.json({ action: 'Isso funciona! Uhul!' })
//   res.json({ resultados })
// })

// // Create task
// app.post('/tasks', async (req, res) => {
//   const body = req.body
//   const create = await tasks.create({ description: req.body.description })
//   res.json(body)
// })

// // Show task
// app.get('/tasks/:id', (req, res) => {
//   const taskId = req.params.id

//   res.send({ action: 'Showing task', taskId: taskId })

//   // console.error(err.stack);
//   // res.status(500).send(`ops! Alguma coisa saiu mal! ${ err.message }`);
// })

// // Update task
// app.put('/tasks/:id', async (req, res) => {
//   const taskId = req.params.id
//   const body = req.body

//   // Um outro método!! 
//   // const body = await tasks.update({ description: req.body.description, done: req.body.done }, { where: { id: taskId } })
//   // res.json({ action: 'Atualizando task', taskId: taskId })


//   console.log(taskId)
//   console.log(body)

//   // const [metadata, results] = await sequelize.query("UPDATE tasks SET description = 'Uhul' WHERE id = :id;", {
//   const [metadata, results] = await sequelize.query("UPDATE tasks SET done = :done WHERE id = :id;", {
//     replacements: {
//       id: taskId,
//       description: body.description,
//       done: body.done
//     }
//   });

//   // res.send({ metadata, results })
//   // res.send({ taskId, body })
//   res.send({ results })
//   // res.send({ action: 'Updating task', taskId: taskId })


// })


// Um outro método!! 
// app.put('/tasks/:id', async (req, res) => {
//   const taskId = req.params.id
  

//   const body = await tasks.update({ description: req.body.description, done: req.body.done }, { where: { id: taskId } })
//   res.json({ action: 'Atualizando task', taskId: taskId })
// })

// Delete task
// app.delete('/tasks/:id', async (req, res) => {
//   const taskId = req.params.id
//   const destroy = await tasks.destroy({ where: { id: taskId } })
//   res.send({ action: 'Deleting task', taskId: taskId })
// })

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})
