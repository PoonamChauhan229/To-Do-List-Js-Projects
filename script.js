let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function addTask() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, status: "pending" });
  input.value = "";
  saveTodos();
}

function toggleStatus(index) {
  todos[index].status = todos[index].status === "completed" ? "pending" : "completed";
  saveTodos();
}

function deleteTask(index) {
  todos.splice(index, 1);
  saveTodos();
}

function setFilter(type) {
  filter = type;
  document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`filter-${type}`).classList.add("active");
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  const filtered = todos.filter(todo => {
    if (filter === "all") return true;
    return todo.status === filter;
  });

  filtered.forEach((todo, i) => {
    list.innerHTML += `
      <li class="todo-item ${todo.status === "completed" ? "completed" : ""}">
        ${todo.text}
        <div class="todo-actions">
          <button onclick="toggleStatus(${i})">✔</button>
          <button onclick="deleteTask(${i})">🗑</button>
        </div>
      </li>
    `;
  });

  updateCounts();
}

function updateCounts() {
  document.getElementById("total").textContent = todos.length;
  document.getElementById("pending").textContent = todos.filter(t => t.status === "pending").length;
  document.getElementById("completed").textContent = todos.filter(t => t.status === "completed").length;
}

renderTodos();