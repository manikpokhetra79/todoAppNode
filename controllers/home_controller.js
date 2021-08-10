const Task = require('../models/tasks_Schema');
module.exports.home = async function(req,res){
    
    let tasks = await Task.find({});

    return res.render('home',{
        title : "Todo App",
        tasks: tasks
    })
}

