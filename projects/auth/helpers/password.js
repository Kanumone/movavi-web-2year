import { getUser } from './users.js';
import crypto from 'crypto';

export function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString('hex');
    return { salt, hashedPassword };
}

export function checkPassword(username, password) {
    const user = getUser(username);
    if (!user) {
        return false;
    }
    const hashedPassword = crypto.pbkdf2Sync(password, user.salt, 10000, 64, 'sha256').toString('hex');
    return hashedPassword === user.hashedPassword;
}
