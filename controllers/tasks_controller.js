const Task = require('../models/tasks_Schema');
module.exports.addTask = async function(req,res){
try {
    // console.log(req.body);
    let task = await Task.create({
        description: req.body.description,
        category : req.body.category,
        priority : req.body.priority
      });
    
    return res.redirect('back');
} catch (error) {
    console.log("Error while creating task in db",error);
    return res.redirect('back');
}
}
module.exports.deleteTask = async function(req,res){
    
    try {
        let task = await Task.findById(req.params.id);
         task.remove();
         return res.redirect('back');
  
    } catch (error) {
        return res.redirect('back');
    }
}