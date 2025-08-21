// dom.js

function renderTodo(todo) {
  const li = document.createElement("li");
  li.classList.add("todo");

  // header (title + dueDate)
  const header = document.createElement("div");
  header.classList.add("todo-header");
  header.innerHTML = `
    <span class="title">${todo.title}</span>
    <span class="due-date">${todo.dueDate}</span>
  `;
header.classList.add(`priority-${(todo.priority || "Low").toLowerCase()}`);


  // details (hidden by default)
  const details = document.createElement("div");
  details.classList.add("todo-details", "hidden");
  details.innerHTML = `
    <p>${todo.description}</p>
    <p>Priority: ${todo.priority}</p>
  `;

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      // delete callback (we’ll pass this in later)
      todo.deleteCallback?.();
    }
  });
  details.appendChild(deleteBtn);

  // toggle details
  header.addEventListener("click", () => {
    details.classList.toggle("show");
  });

  li.appendChild(header);
  li.appendChild(details);

  return li;
  
}

export function renderProjects(projects, onDeleteTodo,onAddTodo) {
  const container = document.querySelector("#projects-container");
  container.innerHTML = "";

  projects.forEach((project, projectIndex) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const title = document.createElement("h2");
    title.textContent = project.name;
    projectDiv.appendChild(title);

    const ul = document.createElement("ul");

    project.todos.forEach((todo, todoIndex) => {
      // attach delete callback so renderTodo can use it
      todo.deleteCallback = () => onDeleteTodo(projectIndex, todoIndex);
      const todoElement = renderTodo(todo);
      ul.appendChild(todoElement);
    });

    projectDiv.appendChild(ul);
    // add-todo form
const form = document.createElement("form");
form.classList.add("add-todo-form");
form.innerHTML = `
  <input type="text" name="title" placeholder="Title" required />
  <textarea name="description" placeholder="Description"></textarea>
  <input type="date" name="dueDate" required />
  <select name="priority">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
  <button type="submit">Add Todo</button>
`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoData = {
    title: form.title.value,
    description: form.description.value,
    dueDate: form.dueDate.value,
    priority: form.priority.value,
  };
  onAddTodo(projectIndex, newTodoData);
  form.reset();
});

projectDiv.appendChild(form);

    container.appendChild(projectDiv);
  });
}
