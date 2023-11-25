const express = require('express')

const app = express();

app.get('/hello', function (req, res) {
    res.end('hello, world!');
});

app.use('/', express.static(`${__dirname}/../frontend`));
app.listen(5000, function () {
    console.log('Server started!');
});
