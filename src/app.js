import express from 'express';
import cors    from 'cors';
import path    from 'path'


require('dotenv').config({path : path.resolve(__dirname,"../.env")});


const App         = express();
const corsOptions = {}


App.use(express.json());
App.use(cors(corsOptions));


export default App;