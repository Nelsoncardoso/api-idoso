import http from 'http' 
import express from 'express'
import session from 'express-session';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
app.use(session({
  secret: "9d9b22903236d333e24f28c315717250",
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

server.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});

