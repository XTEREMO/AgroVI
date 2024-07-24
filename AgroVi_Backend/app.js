//Dependencies.......................................
const express = require('express')
require('dotenv').config()
const cors = require("cors");
const cookieparser = require("cookie-parser");


//databse connect module............................
const connectDB = require('./Database/db_connect');
connectDB();

//routes............................................
const { status,login,signup } = require('./Routes/userLogin/userLogin')
const { weather,cities } = require('./Routes/Api/weather')
const { get_crop_data }  = require('./Routes/cropRecommandation/crop')



// Create APP
const app = express();
app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
  );
app.use(cookieparser());
app.use(express.json());




app.post('/login',login);
app.post('/signup',signup);
app.get('/status',status);
app.post('/weather',weather); 
app.post('/cities',cities); 
app.post('/get_crop_data',get_crop_data); 



app.listen(process.env.PORT) 