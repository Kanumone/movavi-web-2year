import Express from "express"
import {User} from "./user.js";

const app = Express();

const users = [];
let index = 0;

app.use(Express.json());

app.get("/get_users", (req, res) => {
    res.send(JSON.stringify(users));
});

app.post("/create_user", (req, res) => {
    const newUser = new User(index, req.body.name, req.body.age);
    index++;
    users.push(newUser);
    res.send(newUser.name + " created");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
