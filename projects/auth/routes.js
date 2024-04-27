import express from 'express';
import { register } from './controllers/register.js';
import { login } from './controllers/login.js';
import { verifyToken } from './helpers/token.js';
import { prot } from './controllers/protected.js';

const router = express.Router();
// Регистрация нового пользователя
router.post('/register', register);

// Вход пользователя
router.post('/login', login);

// Защищенный маршрут
router.get('/protected', verifyToken, prot);

function test1(req, res, next) {
    console.log('test1');
    next();
}

function test2(req, res, next) {
    next();
    console.log('test2')
}

function work(req, res) {
    console.log('work');
    res.send('work');
}

router.get('/test', test1, test2, work);

export default router;
