import { hashPassword } from "../helpers/password.js";
import db from '../db.js';

export function register(req, res) {
    const users = db.data.users;
    try {
        const { username, password } = req.body;
        console.log(password)
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
        if (users.some(user => user.username === username)) {
            return res.status(400).send('User already exists');
        }
        const { hashedPassword, salt } = hashPassword(password);
        users.push({ username, hashedPassword, salt, password });
        db.write();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
}
