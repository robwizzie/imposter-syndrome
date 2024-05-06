const express = require('express');
const app = express();
const PORT = 6969;

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile('static/index.html', { root: __dirname });
});

app.listen(PORT, () => {
	console.log('App listening on port ' + PORT);
});
