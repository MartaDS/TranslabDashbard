const express = require('express');
const mongoose = require('mongoose')
const app = express();
const keys = require('./config/keys.js')

mongoose.connect('keys.mongoURI')

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});
//require('./src/routes/index.jsx')(app);

const PORT = process.env.PORT || 5000;
app.listen(5000);