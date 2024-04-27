import db from '../db.js';
import { checkPassword } from '../helpers/password.js';
import { generateToken } from '../helpers/token.js';

export function login(req, res) {
    const users = db.data.users;
    try {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(404).send('User not found');
        }
        if (checkPassword(username, password)) {
            res.status(200).json({ token: generateToken(username) });
        } else {
            res.status(401).send('Invalid password');
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('An error occurred');
    }
}