const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// Получение списка задач
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll()
    console.log(todos)
    res.status(200).json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error, get запрос'
    })
  }
})

// Создание новой задачи
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({todo})
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error, post запрос'
    })
  }
})

// Изменение задачи
router.put('/:id', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error, put запрос'
    })
  }
})

// Удаление задачи
router.delete('/:id', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error, delete запрос'
    })
  }
})

module.exports = router