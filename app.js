const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const URL = "mongodb+srv://zezofalcon01:AZ01007488071az@dbbackend.jzoz9jx.mongodb.net/zezo?retryWrites=true&w=majority"
const userRouter = require('./routers/users.js')
const bookRouter = require('./routers/books.js')

const app = express();
app.use(bodyParser.json());

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        mongoose.connect(URL)
        console.log("Connected to Mondo DB")
    }catch (err) {
        console.log(err)
        process.exit()
    }
}

connectDB();

app.use('/' , userRouter)
app.use('/',bookRouter)


app.listen(8080)



























































