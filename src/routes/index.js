import path from 'path';
import request from 'request';

module.exports = (app) => {

	//Route to get all users according with page in parameter
	app.get('/api/users/:page', (req, res) => {
		var page = req.params.page;
		request({
			url: 'https://reqres.in/api/users?page=' + page, 	    
			method: 'GET',
		}, (err, response, body) => { 
			var dataRes = JSON.parse(body);
			if(dataRes) {
				return res.status(200).json(dataRes);
			} else {
				return res.status(404).json({ message: 'Não foi possível buscar os usuários.' })
			}			
		})
	});

	app.all('/*', (req, res) => {
		res.sendFile(path.resolve('src/public/index.html'));
	});
}

