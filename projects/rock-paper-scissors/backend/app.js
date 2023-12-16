const express = require('express');
const handlebars = require('express-handlebars');
const path = require('node:path');
const port = 5000;
const frontend = path.resolve(__dirname, '../frontend');
const router = require('./router.js');

const app = express();

app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    })
);
app.set('views', `${__dirname}/views`);
app.set('view engine', '.hbs');

app.use(router);
app.use(express.static(frontend));

app.listen(port, function () {
    console.log(`Server started! Url: http://localhost:${port}`);
});
