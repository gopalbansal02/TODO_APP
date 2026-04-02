const Todo = require("../models/todo.model")
const createTodo = async(req, res)=>{
    try {
        const todo = await Todo.create(req.body)
        res.status(200).json({"todo":todo, message:"todo banyoo hai!!!!"})
    }
    catch(error){
        res.status(500).json({"error":error.message})
    }
}

const getTodos = async(req,res)=>{
    try{
        const todo = await Todo.find();
        res.status(200).json({"todos":todo})
    }
    catch(error){
        res.status(500).json({"error":error.message})
    }
}


const updateTodos = async(req,res) =>{
    const {title, newTitle, newDescription}= req.body;
    try{
        const results = await Todo.updateOne({"title": title}, {$set:{title: newTitle || title, description: newDescription}})
        if(results.matchedCount === 0){
            return res.status(404).json({message: "Todo Vetiyena hai !!!"})
        }

        return res.status(200).json({todo: results, message: "Tools updated Successfully"});
    }
    catch(error){
        res.status(500).json({"error": error.message})
    }
}

const deleteTodos = async(req,res)=>{
    const{title} = req.body

    try{
        await Todo.deleteOne({title:title});
        return res.status(200).json({message: "Todo Delete pani vayo !!!"})
    }
    catch(error){
        res.status(500).json({"error": error.message})
    }
}

module.exports = {createTodo, getTodos, updateTodos, deleteTodos}
  