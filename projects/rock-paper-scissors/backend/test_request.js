const { User } = require("./classes/user");
const { createUser } = require("./user/createUser");
const { deleteUser } = require("./user/deleteUser");
const { getUser } = require("./user/getUser");
const { getUsers } = require("./user/getUsers");
const { putUser } = require("./user/putUser");

async function run() {
    // await createUser(user);
    // const Ilya = await getUser(9);
    // user.id = 9;
    // const ok = await deleteUser(user);
    // let Ilya = await getUser(10);
    // Ilya.win = 5;
    // await putUser(Ilya);
    // Ilya = await getUser(10);
    const users = await getUsers();

    console.log(users)
}

run();
