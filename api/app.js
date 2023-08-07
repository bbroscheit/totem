const express = require ('express');
const cookieParser = require('cookie-parser');
const bodyParser = require ('body-parser');
const morgan = require('morgan');
let cors = require('cors');
const serverRouter = require('./routes/serverRouter')

const server = express();
const port = 3001;
server.name = 'API';

server.use(bodyParser.urlencoded({ extended:true, limit: '50mb'}));
server.use(bodyParser.json({limit: '50mb'}));
server.use(cookieParser());
server.use(morgan('dev'))

server.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,DELETE');
    next();
});

server.use(express.json());
server.use(cors( {
    origin: '*'
  }));

server.use('/', serverRouter);

server.listen(port, () => {
    console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});

