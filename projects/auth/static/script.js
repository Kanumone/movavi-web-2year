import { post, get, removeToken } from './utils.js';

document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
});

document.getElementById('register').addEventListener('click', (e) => {
    e.preventDefault();
    showRegisterForm();
});

document.getElementById('home').addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

document.getElementById('logout').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const response = await post('/login', { username, password });
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        showProtectedContent();
    } else {
        document.getElementById('loginMessage').innerText = await response.text();
    }
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const response = await post('/register', { username, password });
    document.getElementById('registerMessage').innerText = await response.text();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
});

function showLoginForm() {
    hideAll();
    document.getElementById('loginForm').style.display = 'block';
}

function showRegisterForm() {
    hideAll();
    document.getElementById('registerForm').style.display = 'block';
}

function showHome() {
    hideAll();
    document.getElementById('content').style.display = 'block';
}

function showProtectedContent() {
    hideAll();
    document.getElementById('protectedContent').style.display = 'block';
    document.getElementById('logout').style.display = 'block';
}

function hideAll() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('protectedContent').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
}

function logout() {
    removeToken();
    showHome();
}

window.onload = () => {
    const token = localStorage.getItem('token');
    if (token) {
        showProtectedContent();
    } else {
        showHome();
    }
};
