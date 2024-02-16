const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 1000 || process.env.PORT;

require('dotenv/config');
// const errorHandler = require('./helpers/error-handler');
app.use(cors());
app.options('*', cors())


//middleware
app.use(express.json());
app.use(morgan('tiny'));
// app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
// app.use(errorHandler);
const url = process.env.MONGO_URL;
app.get(`/`, async (req, res) =>{
    // const userList = await User.find();

    // if(!userList) {
    //     res.status(500).json({success: false})
    // } 
    res.send('hello');
})
mongoose.connect(url).then(() => {
    console.log('mongodb server started');
})
const usersRoutes = require('./routes/users');

app.use(`/users`, usersRoutes);
app.listen(PORT, ()=>{

    console.log('server is running http://localhost:1000');
})


console.log("cvsfd");
