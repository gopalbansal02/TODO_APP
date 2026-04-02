const validateTodo = (req,res,next)=>{
    const {title, desciption} = req.body;
    if(!title || !description){
        res.status(400).json({message:"Missing Details"})
    }
    next();
}

module.exports={validateTodo}