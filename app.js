const express = require('express');

const mongoose = require('mongoose');


const authRoutes = require('./routes/auth');
 
const cookieParser = require('cookie-parser');
const cors = require('cors');


const MONGODB_URI =
  'mongodb+srv://hritiksoni:Hritik1234@aura.ivffbai.mongodb.net/aura?retryWrites=true&w=majority';


const app = express();

app.use(cors({
  origin: ['http://localhost:5173'], 
  credentials: true, 
}))

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({extended:true}));

mongoose.connect(MONGODB_URI)
.then(()=>{
  console.log('database get coonected')
})

app.use(authRoutes);


app.listen(3000);