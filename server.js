import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from './routes/user.js';



const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());


app.use("/", userRoutes);

app.get("/",(req, res)=> res.send ("hello from Express"));
app.all("*",(req, res) => res.send("that route doesn't exist"));

app.listen ( port,() =>
console.log(`server is listining on port:http://localhost:${port}`)
); 