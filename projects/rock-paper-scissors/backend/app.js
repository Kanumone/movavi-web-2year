const express = require('express');
const handlebars = require('express-handlebars');
const frontend = __dirname + '/../frontend';

const app = express();

app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    })
);
app.set('views', `${frontend}/views`);
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Greetings form Handlebars',
        qwe: 123
    });
});

app.listen(5000, function () {
    console.log('Server started!');
});
