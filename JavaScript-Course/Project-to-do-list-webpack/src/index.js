import { createProject } from "./project";
import { createTodo } from "./todo";
import { renderProjects } from "./dom";
import './styles.css';

// --- LocalStorage helpers ---
function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
  const data = localStorage.getItem("projects");
  if (!data) return null;

  const parsed = JSON.parse(data);

  // Rebuild project and todo objects using your factories
  return parsed.map(proj => {
    const project = createProject(proj.name);
    project.todos = proj.todos.map(todo =>
      createTodo(todo.title, todo.description, todo.dueDate, todo.priority)
    );
    return project;
  });
}

// --- Load projects from storage or create default ---
let projects = loadProjects();
if (!projects) {
  const school = createProject("School");
  school.todos.push(createTodo("Math homework", "2023-10-31", "High"));
  school.todos.push(createTodo("Science project", "2023-11-05", "Medium"));

  const work = createProject("Work");
  work.todos.push(createTodo("Email client", "2023-08-25", "Low"));

  projects = [school, work];
  saveProjects(projects);
}

// --- Delete handler ---
function handleDeleteTodo(projectIndex, todoIndex) {
  projects[projectIndex].todos.splice(todoIndex, 1);
  saveProjects(projects);
  renderProjects(projects, handleDeleteTodo, handleAddTodo);
}

// --- Add handler ---
function handleAddTodo(projectIndex, newTodoData) {
  const { title, description, dueDate, priority } = newTodoData;
  const newTodo = createTodo(title, description, dueDate, priority);
  projects[projectIndex].todos.push(newTodo);
  saveProjects(projects);
  renderProjects(projects, handleDeleteTodo, handleAddTodo);
}

// --- Initial render ---
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects, handleDeleteTodo, handleAddTodo);
});
