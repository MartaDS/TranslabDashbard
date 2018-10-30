const express = require('express');

const app = express();

app.get('/', (req, res) => {
		res.render('src/routes/dashboard');
	});

const port = process.env.PORT || 5000;
app.listen(5000);