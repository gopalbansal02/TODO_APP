const express = require("express")
const router = express.Router()

const{getTodos, createTodo, updateTodos, deleteTodos} = require("../controllers/todo.controllers.js")
const {validateTodo} = require("../middlewares/validateTodo.middleware.js")

router.get("/", getTodos)
router.post("/", validateTodo, createTodo)
router.patch("/", updateTodos)
router.delete("/", deleteTodos)
module.exports= router;