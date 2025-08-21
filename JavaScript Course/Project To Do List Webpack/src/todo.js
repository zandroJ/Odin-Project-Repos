export function createTodo(title, description = "", dueDate, priority, status = "In Progress", notes = "") {
  return { title, description, dueDate, priority, status, notes };
}
