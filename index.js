
import bodyParser from "body-parser";
import express from "express";
import Connection from "./database/db.js";
import route from "./api/movies/route.js";
import route2 from "./api/directors/route.js";
import route3 from "./api/producers/route.js";



const app=express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use("/movies",route);
app.use("/directors",route2);
app.use("/producers",route3);


const PORT = 8000;
Connection();
app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));


