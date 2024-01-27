const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('home.njk');
});

router.get('/posts', function (req, res) {
    res.render('posts.njk', {
        posts: [
            {title: 'hello', content: '123'}
        ]
    });
});

module.exports = router;
