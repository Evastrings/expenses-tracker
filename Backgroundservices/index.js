const express = require("express");
const cron = require("node-cron");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { expenseEmail } = require("./EmailService/Expense");


dotenv.config()



// DB CONNECTION

mongoose.connect(process.env.DB_CONNECTION).then(() =>{
    console.log("DB connection is successful")
}).catch((e) =>{
    console.log(e)
})

const run = () => {
    cron.schedule("* * * * * *", () => {
      expenseEmail();
    });
  };

  run();

// starting server
const PORT=process.env.PORT;
app.listen(PORT, () =>{
    console.log(`Backgroundservice is running on port ${PORT}`)
})

