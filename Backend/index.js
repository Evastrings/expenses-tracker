const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const expenseRoute=require("./routes/expense")

dotenv.config()
const app=express();

//MIDDLEWARE

app.use(cors());

//ROUTES

app.use(express.json());
app.use("/expenses",expenseRoute);


// DB CONNECTION

mongoose.connect(process.env.DB_CONNECTION).then(() =>{
    console.log("DB connection is successful")
}).catch((e) =>{
    console.log(e)
})

// starting server
const PORT=process.env.PORT;
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
