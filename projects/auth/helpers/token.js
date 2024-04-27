import jwt from 'jsonwebtoken';
import { getUser } from './users.js';
const secretkey = '123qwe';

export function generateToken(username) {
    return jwt.sign({ username }, secretkey, { expiresIn: '1h' });
}

export function verifyToken(req, res, next) {
    // const token = req.headers['authorization'];
    // if (!token) {
    //     return res.status(401).send('Access denied. No token provided');
    // }
    // jwt.verify(token, secretkey, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).send('Invalid token');
    //     }
    //     req.username = decoded.username;
    //     next();
    // });
    console.log(req.headers)
    const user = getUser(req.headers['user']);
    console.log(user)
    const password = req.headers['password'];
    if (user.password !== password) {
        res.status(403);
        return req.send('Invalid password');
    }
    res.username = user.username;
    next();
}
