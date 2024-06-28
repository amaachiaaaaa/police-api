import express from "express";
import { dbConnection } from "./config/db.js";
import { statementRouter } from "./routes/statementRouter.js";

// create express app
const app = express()

dbConnection();
app.use(statementRouter);


// Define routes
app.get('/', (req,res) => {
    res.json('Welcome home');
});

// listening for incoming requests
const port = 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})