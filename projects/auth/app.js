import express from 'express';
import router from './routes.js';

const app = express();
app.use(express.json());
app.use(express.static('static'));
app.use(router);

const PORT = 3000;
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
