require('dotenv').config(); // Load environment variables from .env file
require('./Db/connect'); // Import the database connection
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = process.env.PORT || 3000;
const connectDB = require('./Db/connect'); // Import the connectDB function
const notFound = require('./middleware/not-found'); // Import the notFound middleware
const errorHandlerMiddleware = require('./middleware/error-handler'); // Import the notFound middleware

// middlewares
app.use(express.static('./public')); // serve static files from the public directory
app.use(express.json()); // content-type: application/json // parse incoming JSON data

//ROUTES
/*app.get('/hello',(req , res)=>{
    res.send('Hello World');
})*/

app.use('/api/v1/tasks', tasks) //get all the tasks
app.use(notFound);
app.use(errorHandlerMiddleware); // handle errors globally
/*
app.post('/api/v1/tasks',(req , res)=>{
    
})//create new task

app.get('/api/v1/tasks/:id',(req , res)=>{//update single task
    
})
app.patch('/api/v1/tasks/:id',(req , res)=>{ //update task
    
})
app.delete('/api/v1/tasks/:id',(req , res)=>{//delete task
    
})*/




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI); // Connect to the database using the connection string from environment variables
        app.listen(port, console.log(`Server is running on http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
