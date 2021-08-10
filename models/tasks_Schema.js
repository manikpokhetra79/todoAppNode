const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({

    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required: true
    },
    date:{
        type:Date,
        required:true
    }
});

const Task = mongoose.model('Task',tasksSchema);
module.exports = Task;