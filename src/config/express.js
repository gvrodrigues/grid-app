import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('./src/public'));

app.all('/*', (req, res) => {
	res.sendFile(path.resolve('src/public/index.html'));
});

export default app;