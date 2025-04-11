# 📝 Build a Simple To-Do List App with JavaScript – Project Walkthrough

## 🚀 Project Overview

This project is a **simple yet functional To-Do List app** built using HTML, CSS, and JavaScript. It allows users to add, complete, and delete tasks seamlessly with a clean and responsive interface.

It’s perfect for beginners who want to learn how to **manipulate the DOM**, **handle events**, and **apply basic styling** to create a user-friendly web application. In this post, we’ll break down the code structure, explain each section, and offer ideas for enhancement.

---
### 🔗 GitHub Source Code: https://github.com/PoonamChauhan229/To-Do-List-Js-Projects
### 🌐 Live Demo: https://poonamchauhan229.github.io/To-Do-List-Js-Projects/

## 📁 Project Structure

```
To-Do-List-Js-Projects/
├── index.html       → Contains the structure and layout of the app.
├── style.css        → Provides styling for the to-do list.
└── script.js        → Contains JavaScript logic to handle tasks.
```

---

## 🔧 index.html – Layout and Structure

---
### `<body>` and `.container` Wrapper

```
<body>
  <div class="container">
```
- The `<body>` tag contains all visible content on the page.  
- The `.container` class wraps all content in a styled layout.

---

### Heading - Main Title

```
<h1>To-Do List</h1>
```
- Displays the main heading/title of the application.

---

### `.todo-form` - Input & Add Button

```
<div class="todo-form">
  <input type="text" id="todo-input" placeholder="Add new task..." />
  <button onclick="addTask()">Add</button>
</div>
```
- An input field for entering a new task.  
- A button to add the task which triggers the `addTask()` function defined in `script.js`.

---

### `.filters` - Filter Buttons

```
<div class="filters">
  <button onclick="setFilter('all')" id="filter-all" class="active">All</button>
  <button onclick="setFilter('pending')" id="filter-pending">Pending</button>
  <button onclick="setFilter('completed')" id="filter-completed">Completed</button>
</div>
```
- Provides buttons to filter tasks.  
- Each button calls the `setFilter()` function with a corresponding filter type.

---

### `<ul id="todo-list">` - Task List

```
<ul id="todo-list"></ul>
```
- An empty unordered list where tasks will be dynamically added using JavaScript.

---

### `.summary` - Task Counters

```
<div class="summary">
  <span>Total: <span id="total">0</span></span>
  <span>Pending: <span id="pending">0</span></span>
  <span>Completed: <span id="completed">0</span></span>
</div>
```
- Displays real-time task statistics: total, pending, and completed.  
- Each value is updated dynamically via JavaScript.

---

### `<script>` - JavaScript File

```
<script src="./script.js"></script>
```
- Loads the `script.js` file which contains the logic for managing tasks.

---

## 🎨 style.css – Styling the Application

### `GLOBAL RESET AND BOX MODEL `
    - Removes default spacing added by browsers.
    - Sets box-sizing to border-box so padding and border are included in element's total size.

```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
```
## `BODY STYLING `
   - Applies a dark background for a modern, sleek look.
   - Sets a clean and readable font.
   - Adds padding around the page for spacing.
   - Sets light text for contrast against the dark background.

```css
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #121212;
        color: #f1f1f1;
        padding: 20px;
    }
```
## `MAIN CONTAINER`
   - Wraps the entire app content.
   - Centers it horizontally using margin: auto.
   - Applies a dark card-like background with padding.
   - Adds rounded corners and a subtle glowing shadow.

```css
    .container {
        max-width: 500px;
        margin: auto;
        background-color: #1e1e1e;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
    }
```


##  `HEADING / TITLE`
   - Centers the to-do list title.
   - Adds spacing below.
   - Uses a bright blue color for visibility.

```css
        h1 {
        text-align: center;
        margin-bottom: 20px;
        color: #00d9ff;
        }
```

##   `FORM LAYOUT (Input + Button)`
   - Displays the input and add button side-by-side.
   - Adds spacing between them and below.

```css
    .todo-form {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
    }
```

### `INPUT FIELD STYLING`
- Expands to fill available width.
- Adds internal padding for better text spacing.
- Removes borders and applies a dark background.
- Makes text white for better readability.`

```css
.todo-form input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: #2a2a2a;
  color: white;
}
```

### `ADD BUTTON STYLING`
   - Gives the button a standout blue background.
   - Adds padding for better click area.
   - Removes border, changes cursor on hover.
   - Uses bold text to highlight action.

```css
    .todo-form button {
        padding: 10px 16px;
        background-color: #00d9ff;
        border: none;
        color: black;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
    }
```

### `FILTER BUTTON GROUP`
   - Horizontally centers the filter buttons.
   - Adds spacing between and around them.
```css
    .filters {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin: 15px 0;
    }
```

## `FILTER BUTTONS DEFAULT`
   - Gives each filter a dark background.
   - Sets light text for readability.
   - Rounded edges and pointer cursor.

```css
    .filters button {
        padding: 6px 12px;
        background-color: #2a2a2a;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: #ccc;
        font-weight: 500;
    }
```

###  `ACTIVE FILTER BUTTON`
   - Highlights the currently selected filter.
   - Changes background to blue and text to black.

```css
    .filters button.active {
        background-color: #00d9ff;
        color: black;
    }
```

### `TO-DO LIST STYLING`
   - Removes bullet points from the list.
   - Adds margin at the top for spacing.

```css
    #todo-list {
        list-style: none;
        margin-top: 10px;
    }
```
### `INDIVIDUAL TO-DO ITEM`
   - Creates a card-like layout for each task.
   - Adds padding, border, and background.
   - Uses flexbox to space out task text and buttons.
   - Rounded corners and margin between tasks.

```css
    .todo-item {
        padding: 10px 12px;
        border: 1px solid #333;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        background-color: #2a2a2a;
    }
```

### `COMPLETED TASKS`
   - Adds strikethrough text effect.
   - Changes background to indicate completion.

```css
.todo-item.completed {
  text-decoration: line-through;
  background-color: #1c3c3c;
}
```
### `ACTION BUTTON GROUP`
   - Aligns buttons (like complete and delete) horizontally.
   - Adds spacing between them.

```css
.todo-actions {
  display: flex;
  gap: 10px;
}
```

### `ACTION BUTTONS`
   - No background or border to blend with design.
   - Uses icons or text with bright color.
   - Enlarged font for better visibility.
```css
    .todo-actions button {
        background: none;
        border: none;
        cursor: pointer;
        color: #00d9ff;
        font-size: 16px;
    }
```

###  `TASK SUMMARY`
   - Displays total tasks and completed tasks.
   - Adds spacing from the list.
   - Uses lighter color for subtle info.

```css
    .summary {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #aaa;
    }
```
---

## 🧠 script.js – JavaScript Functionality


### 🔹 `let todos = JSON.parse(localStorage.getItem("todos")) || [];`
- This line initializes the todos array from localStorage.
- If there are saved tasks, it parses them into a JS array.
- If not, it initializes todos as an empty array.

### 🔹 `let filter = "all";`
- This sets a default filter to show all tasks (pending and completed).
- It helps in filtering tasks during rendering.

### 🔹 `function saveTodos()`
- Purpose: Saves the current todos array to localStorage and re-renders the UI.
- localStorage.setItem("todos", JSON.stringify(todos)) saves the array as a string.
- Calls renderTodos() to update the task list on the page.

```js
    function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    }
```

---

### 🔹 `function addTask()`
- Purpose: Adds a new task to the todos array.
- Gets the input text, trims it, and ensures it's not empty.
- Adds a new task object with text and status: "pending".
- Clears the input field.
- Saves and re-renders the task list via saveTodos().

```js
    function addTask() {
        const input = document.getElementById("todo-input");
        const text = input.value.trim();
        if (!text) return;
        todos.push({ text, status: "pending" });
        input.value = "";
        saveTodos();
    }
```
---

### 🔹 `function toggleStatus(index)`
- Purpose: Toggles a task’s status between pending and completed.
- Uses the task's index to modify its status.
- Saves and re-renders the updated task list.

```js
    function toggleStatus(index) {
        todos[index].status = todos[index].status === "completed" ? "pending" : "completed";
        saveTodos();
    }
```
---

### 🔹 `function deleteTask(index)`
- Purpose: Deletes a task from the list using its index.
- Uses splice to remove the item.
- Saves the updated list and refreshes the UI.

```js
    function deleteTask(index) {
        todos.splice(index, 1);
        saveTodos();
    }
```
---

### 🔹 `function setFilter(type)`
- Purpose: Sets the current filter (all, pending, completed) and updates UI.
- Updates the global filter variable.
- Removes active class from all filter buttons and applies it to the selected one.
- Re-renders the tasks using renderTodos().

```js
    function setFilter(type) {
        filter = type;
        document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
        document.getElementById(`filter-${type}`).classList.add("active");
        renderTodos();
    }
```
---

### 🔹 `function renderTodos()`
- Purpose: Renders the tasks on the screen based on the current filter.
- Clears the existing task list in the UI.
- Filters tasks based on the selected filter (all, pending, completed).
- Appends each task as an HTML <li> with toggle and delete buttons.
- Calls updateCounts() to refresh the task counters.

```js
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
```
---

### 🔹 `function updateCounts()`
- Purpose: Updates the count of total, pending, and completed tasks in the UI.
- Uses filter and length to update elements with IDs: total, pending, completed.

```js
    function updateCounts() {
        document.getElementById("total").textContent = todos.length;
        document.getElementById("pending").textContent = todos.filter(t => t.status === "pending").length;
        document.getElementById("completed").textContent = todos.filter(t => t.status === "completed").length;
    }
```
---

### 🔹 `renderTodos()`
- Called immediately when the script loads to display tasks (if any) from localStorage.

## ✅ Summary of Functions:
1. `saveTodos()` – Save and refresh task list.
2. `addTask()` – Add a new task to the list.
3. `toggleStatus(index)` – Toggle task completion status.
4. `deleteTask(index)` – Remove a task from the list.
5. `setFilter(type)` – Change the task filter and update view.
6. `renderTodos()` – Render all filtered tasks to the UI.
7. `updateCounts()` – Update the task count indicators.

---

## ✨ Features

| Feature            | Description                                 |
|--------------------|---------------------------------------------|
| Add Task           | Users can input and add a new task          |
| Delete Task        | Users can click 🗑 to remove any task        |
| Mark as Complete   | Clicking ✔ toggles task's completion state  |
| Filter Tasks       | View tasks by All, Pending, or Completed    |
| Task Counter       | Shows total, pending, and completed tasks   |
| LocalStorage Sync  | Tasks persist even after browser refresh    |

---

## 💾 Data Persistence

- Uses browser `localStorage` to save and retrieve tasks, ensuring persistence across sessions.

---

## 🏁 Conclusion

This To-Do List app is a great starting point to understand how HTML, CSS, and JavaScript work together. You’ve seen how to build and manipulate DOM elements dynamically, apply styles, and add interactivity with event listeners.

By enhancing it with additional features, you can take this basic project and make it truly production-ready — or even build your own productivity suite!

> 💻 [Check out the full project on GitHub](https://github.com/PoonamChauhan229/To-Do-List-Js-Projects)
