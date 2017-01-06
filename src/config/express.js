import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes'

const app = express();

app.use(express.static('./src/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

export default app;