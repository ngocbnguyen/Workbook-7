function toDoBtnEvent() {
  const userId = todoInput.value;
  fetch("https://jsonplaceholder.typicode.com/todos/" + userId)
    .then((response) => response.json())
    .then((data) => {
      let messageField = document.getElementById("messageText");
      messageField.innerText = `ID: ${data.id}
         Title: ${data.title}
         Completed: ${data.completed}`;
    });
}

window.onload = function () {
  document.getElementById("toDoBtn").onclick = toDoBtnEvent;
};
