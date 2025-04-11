
# 📝 Build a Simple To-Do List App with JavaScript – Project Walkthrough

## 🚀 Project Overview

This project is a **simple yet functional To-Do List app** built using HTML, CSS, and JavaScript. It allows users to add, complete, and delete tasks seamlessly with a clean and responsive interface.

It’s perfect for beginners who want to learn how to **manipulate the DOM**, **handle events**, and **apply basic styling** to create a user-friendly web application. In this post, we’ll break down the code structure, explain each section, and offer ideas for enhancement.

---

## 📁 Project Structure

```
To-Do-List-Js-Projects/
├── index.html       → Contains the structure and layout of the app.
├── style.css        → Provides styling for the to-do list.
└── script.js        → Contains JavaScript logic to handle tasks.
```

---

## 🔧 index.html – Layout and Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To-Do List</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Add a new task..." />
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### ✅ Explanation:
- The `<input>` field allows users to type a task.
- The `<button>` triggers the `addTask()` function when clicked.
- The `<ul>` list displays all added tasks dynamically.
- External stylesheet and script are linked.

---

## 🎨 style.css – Styling the Application

### 🎨Centers the app and sets a clean background.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```
### 🎨 Creates a neat card-style container.

```css
.todo-container {
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```
### 🎨 Ensures responsive design for inputs and buttons.

```css
input[type="text"], button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
```

### 🎨 Adds hover effect and consistent button style.
```css
button {
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
``
### 🎨 Structures tasks with spacing and styles.

```css
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
}
```
### 🎨Visually marks completed tasks.

```css
.completed {
  text-decoration: line-through;
  color: gray;
}
```

### 🎨Makes delete button prominent and interactive.

```css
.delete {
  cursor: pointer;
  color: red;
}
```
---

## 🧠 script.js – JavaScript Functionality

### Grabs input text and prevents blank tasks.

```js
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
```

---

## ✨ Features

| Feature           | Description                                 |
|-------------------|---------------------------------------------|
| Add Task          | Users can input and add a new task          |
| Delete Task       | Users can click ❌ to remove any task        |
| Mark as Complete  | Clicking on a task toggles completion state |

---

## 💡 Possible Improvements

If you're looking to enhance this app further, here are a few ideas:

- **Local Storage**: Save tasks across page reloads.
- **Edit Task**: Add option to modify existing tasks.
- **Task Priority**: Add priority levels (High, Medium, Low).
- **Dark Mode**: Allow users to switch between light and dark themes.
- **Keyboard Input**: Allow pressing “Enter” to add tasks.

---

## 🏁 Conclusion

This To-Do List app is a great starting point to understand how HTML, CSS, and JavaScript work together. You’ve seen how to build and manipulate DOM elements dynamically, apply styles, and add interactivity with event listeners.

By enhancing it with additional features, you can take this basic project and make it truly production-ready — or even build your own productivity suite!

> 💻 [Check out the full project on GitHub](https://github.com/PoonamChauhan229/To-Do-List-Js-Projects)
