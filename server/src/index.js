"use strict";



// import router from "./routes";
const router = require('./routes');

require('dotenv').config();
// const { User }= require ('./db/models');
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(router);


// app.post('/user',async (req, res,next)=>{
//     try{
//         const createdUser = await User.create(req.body);
//         return res.send(createdUser);
//     }catch (e) {
//         next(e);
//     }
// });

app.listen(port, () =>console.log(`Example app listening on port ${port}!`));

