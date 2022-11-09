"use strict"

function fillUsersTable(users) {
    const tbody = document.querySelector("#usersTable tbody");
    for (const user of users) {
        let row = tbody.insertRow(-1);
        let cell1 = row.insertCell(0);
        cell1.innerText = user.name;
        let cell2 = row.insertCell(1);
        cell2.innerText = user.username;
        let cell3 = row.insertCell(0);
        cell3.innerText = user.email;
    }

}

window.onload = function () {
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        fillUsersTable(data);
    })
}