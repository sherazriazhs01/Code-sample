// Ye ham sab say pehlay is liye likh rahe hain takay sab say pehlay ye load ho ku kay ismay url or port 
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000 ;
const router = require('./backend/route/authRoute')
const connectDb = require("./backend/config/dbconnect");

// yaha pe db ko call krenge
app.use(express.json());

connectDb();

app.use('/api', router)
//app.use('/api/blog',blog)
app.listen(PORT, ()=>{
    console.log(`server is runnig on http://localhost:${PORT}`);
    
})



