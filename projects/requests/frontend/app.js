import createUser from "./create_user.js";
import getUsers from "./get_user.js";

const createButton = document.getElementById('createButton');
const userList = document.getElementById('users');
const usernameEl = document.getElementById('username');
const ageEl = document.getElementById('age');

async function drawUsers() {
    const users = await getUsers();
    userList.innerHTML = "";
    for (let user of users) {
        userList.insertAdjacentHTML("afterbegin", `
            <li class="user">
                <div>${user.name}</div>
                <div>${user.age}</div>
            </li>
        `);
    }
}
drawUsers();

createButton.addEventListener('click', async () => {
    let res = await createUser(usernameEl.value, ageEl.value);
    if (res.ok) {
        drawUsers();
    }
});
