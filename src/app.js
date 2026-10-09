import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import config from "./config/index.js";

const PORT = 3000;

const app = express();
app.use(cors({
    origin: config.app.corsOrigin, 
    credentials: true,
  }))
app.use(express.json()); 
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});