import Express from "express";
import { Router } from "express";
import {User} from "./models/user.js";
import cors from 'cors';

const app = Express();

const users = [];
let index = 0;

app.use(Express.json());
app.use(cors());
app.use(Express.static('../frontend'));

app.get("/get_users", (_, res) => {
    res.send(JSON.stringify(users));
});

app.post("/create_user", (req, res) => {
    const username = req.body.name;
    const age = req.body.age;
    const newUser = new User(index, username, age);
    index++;
    users.push(newUser);
    res.send(newUser.name + " created");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
