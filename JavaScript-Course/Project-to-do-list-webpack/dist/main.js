/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\n// dom.js\r\n\r\nfunction renderTodo(todo) {\r\n  const li = document.createElement(\"li\");\r\n  li.classList.add(\"todo\");\r\n\r\n  // header (title + dueDate)\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"todo-header\");\r\n  header.innerHTML = `\r\n    <span class=\"title\">${todo.title}</span>\r\n    <span class=\"due-date\">${todo.dueDate}</span>\r\n  `;\r\n\r\n  // details (hidden by default)\r\n  const details = document.createElement(\"div\");\r\n  details.classList.add(\"todo-details\", \"hidden\");\r\n  details.innerHTML = `\r\n    <p>${todo.description}</p>\r\n    <p>Priority: ${todo.priority}</p>\r\n  `;\r\n\r\n  // delete button\r\n  const deleteBtn = document.createElement(\"button\");\r\n  deleteBtn.textContent = \"Delete\";\r\n  deleteBtn.addEventListener(\"click\", () => {\r\n    if (confirm(\"Are you sure you want to delete this todo?\")) {\r\n      // delete callback (we’ll pass this in later)\r\n      todo.deleteCallback?.();\r\n    }\r\n  });\r\n  details.appendChild(deleteBtn);\r\n\r\n  // toggle details\r\n  header.addEventListener(\"click\", () => {\r\n    details.classList.toggle(\"hidden\");\r\n  });\r\n\r\n  li.appendChild(header);\r\n  li.appendChild(details);\r\n\r\n  return li;\r\n  \r\n}\r\n\r\nfunction renderProjects(projects, onDeleteTodo,onAddTodo) {\r\n  const container = document.querySelector(\"#projects-container\");\r\n  container.innerHTML = \"\";\r\n\r\n  projects.forEach((project, projectIndex) => {\r\n    const projectDiv = document.createElement(\"div\");\r\n    projectDiv.classList.add(\"project\");\r\n\r\n    const title = document.createElement(\"h2\");\r\n    title.textContent = project.name;\r\n    projectDiv.appendChild(title);\r\n\r\n    const ul = document.createElement(\"ul\");\r\n\r\n    project.todos.forEach((todo, todoIndex) => {\r\n      // attach delete callback so renderTodo can use it\r\n      todo.deleteCallback = () => onDeleteTodo(projectIndex, todoIndex);\r\n      const todoElement = renderTodo(todo);\r\n      ul.appendChild(todoElement);\r\n    });\r\n\r\n    projectDiv.appendChild(ul);\r\n    // add-todo form\r\nconst form = document.createElement(\"form\");\r\nform.classList.add(\"add-todo-form\");\r\nform.innerHTML = `\r\n  <input type=\"text\" name=\"title\" placeholder=\"Title\" required />\r\n  <textarea name=\"description\" placeholder=\"Description\"></textarea>\r\n  <input type=\"date\" name=\"dueDate\" required />\r\n  <select name=\"priority\">\r\n    <option value=\"Low\">Low</option>\r\n    <option value=\"Medium\">Medium</option>\r\n    <option value=\"High\">High</option>\r\n  </select>\r\n  <button type=\"submit\">Add Todo</button>\r\n`;\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const newTodoData = {\r\n    title: form.title.value,\r\n    description: form.description.value,\r\n    dueDate: form.dueDate.value,\r\n    priority: form.priority.value,\r\n  };\r\n  onAddTodo(projectIndex, newTodoData);\r\n  form.reset();\r\n});\r\n\r\nprojectDiv.appendChild(form);\r\n\r\n    container.appendChild(projectDiv);\r\n  });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL3NyYy9kb20uanM/Y2JmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkb20uanNcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvZG8odG9kbykge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxpLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xyXG5cclxuICAvLyBoZWFkZXIgKHRpdGxlICsgZHVlRGF0ZSlcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidG9kby1oZWFkZXJcIik7XHJcbiAgaGVhZGVyLmlubmVySFRNTCA9IGBcclxuICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj4ke3RvZG8udGl0bGV9PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvc3Bhbj5cclxuICBgO1xyXG5cclxuICAvLyBkZXRhaWxzIChoaWRkZW4gYnkgZGVmYXVsdClcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbHNcIiwgXCJoaWRkZW5cIik7XHJcbiAgZGV0YWlscy5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPHA+UHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX08L3A+XHJcbiAgYDtcclxuXHJcbiAgLy8gZGVsZXRlIGJ1dHRvblxyXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRvZG8/XCIpKSB7XHJcbiAgICAgIC8vIGRlbGV0ZSBjYWxsYmFjayAod2XigJlsbCBwYXNzIHRoaXMgaW4gbGF0ZXIpXHJcbiAgICAgIHRvZG8uZGVsZXRlQ2FsbGJhY2s/LigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbiAgLy8gdG9nZ2xlIGRldGFpbHNcclxuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICB9KTtcclxuXHJcbiAgbGkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBsaS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuXHJcbiAgcmV0dXJuIGxpO1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMsIG9uRGVsZXRlVG9kbyxvbkFkZFRvZG8pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgdG9kb0luZGV4KSA9PiB7XHJcbiAgICAgIC8vIGF0dGFjaCBkZWxldGUgY2FsbGJhY2sgc28gcmVuZGVyVG9kbyBjYW4gdXNlIGl0XHJcbiAgICAgIHRvZG8uZGVsZXRlQ2FsbGJhY2sgPSAoKSA9PiBvbkRlbGV0ZVRvZG8ocHJvamVjdEluZGV4LCB0b2RvSW5kZXgpO1xyXG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IHJlbmRlclRvZG8odG9kbyk7XHJcbiAgICAgIHVsLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgLy8gYWRkLXRvZG8gZm9ybVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbmZvcm0uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWZvcm1cIik7XHJcbmZvcm0uaW5uZXJIVE1MID0gYFxyXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiByZXF1aXJlZCAvPlxyXG4gIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cclxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHJlcXVpcmVkIC8+XHJcbiAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBUb2RvPC9idXR0b24+XHJcbmA7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmV3VG9kb0RhdGEgPSB7XHJcbiAgICB0aXRsZTogZm9ybS50aXRsZS52YWx1ZSxcclxuICAgIGRlc2NyaXB0aW9uOiBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgZHVlRGF0ZTogZm9ybS5kdWVEYXRlLnZhbHVlLFxyXG4gICAgcHJpb3JpdHk6IGZvcm0ucHJpb3JpdHkudmFsdWUsXHJcbiAgfTtcclxuICBvbkFkZFRvZG8ocHJvamVjdEluZGV4LCBuZXdUb2RvRGF0YSk7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG59KTtcclxuXHJcbnByb2plY3REaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\n// initial projects\r\nconst school = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"School\");\r\nschool.todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Math homework\", \"2023-10-31\", \"High\"));\r\nschool.todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Science project\", \"2023-11-05\", \"Medium\"));\r\n\r\nconst work = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Work\");\r\nwork.todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Email client\", \"2023-08-25\", \"Low\"));\r\n\r\nconst projects = [school, work];\r\n\r\n// delete handler\r\nfunction handleDeleteTodo(projectIndex, todoIndex) {\r\n  projects[projectIndex].todos.splice(todoIndex, 1);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects, handleDeleteTodo, handleAddTodo);\r\n}\r\n\r\n// add handler\r\nfunction handleAddTodo(projectIndex, newTodoData) {\r\n  const { title, description, dueDate, priority } = newTodoData;\r\n  const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, description, dueDate, priority);\r\n  projects[projectIndex].todos.push(newTodo);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects, handleDeleteTodo, handleAddTodo);\r\n}\r\n\r\n// initial render\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects, handleDeleteTodo, handleAddTodo);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNOO0FBQ0c7QUFDdkM7QUFDQTtBQUNBLGVBQWUsdURBQWE7QUFDNUIsa0JBQWtCLGlEQUFVO0FBQzVCLGtCQUFrQixpREFBVTtBQUM1QjtBQUNBLGFBQWEsdURBQWE7QUFDMUIsZ0JBQWdCLGlEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdDQUF3QztBQUNsRCxrQkFBa0IsaURBQVU7QUFDNUI7QUFDQSxFQUFFLG9EQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbi8vIGluaXRpYWwgcHJvamVjdHNcclxuY29uc3Qgc2Nob29sID0gY3JlYXRlUHJvamVjdChcIlNjaG9vbFwiKTtcclxuc2Nob29sLnRvZG9zLnB1c2goY3JlYXRlVG9kbyhcIk1hdGggaG9tZXdvcmtcIiwgXCIyMDIzLTEwLTMxXCIsIFwiSGlnaFwiKSk7XHJcbnNjaG9vbC50b2Rvcy5wdXNoKGNyZWF0ZVRvZG8oXCJTY2llbmNlIHByb2plY3RcIiwgXCIyMDIzLTExLTA1XCIsIFwiTWVkaXVtXCIpKTtcclxuXHJcbmNvbnN0IHdvcmsgPSBjcmVhdGVQcm9qZWN0KFwiV29ya1wiKTtcclxud29yay50b2Rvcy5wdXNoKGNyZWF0ZVRvZG8oXCJFbWFpbCBjbGllbnRcIiwgXCIyMDIzLTA4LTI1XCIsIFwiTG93XCIpKTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW3NjaG9vbCwgd29ya107XHJcblxyXG4vLyBkZWxldGUgaGFuZGxlclxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUb2RvKHByb2plY3RJbmRleCwgdG9kb0luZGV4KSB7XHJcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcclxuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cywgaGFuZGxlRGVsZXRlVG9kbywgaGFuZGxlQWRkVG9kbyk7XHJcbn1cclxuXHJcbi8vIGFkZCBoYW5kbGVyXHJcbmZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8ocHJvamVjdEluZGV4LCBuZXdUb2RvRGF0YSkge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9ID0gbmV3VG9kb0RhdGE7XHJcbiAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gIHJlbmRlclByb2plY3RzKHByb2plY3RzLCBoYW5kbGVEZWxldGVUb2RvLCBoYW5kbGVBZGRUb2RvKTtcclxufVxyXG5cclxuLy8gaW5pdGlhbCByZW5kZXJcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIHJlbmRlclByb2plY3RzKHByb2plY3RzLCBoYW5kbGVEZWxldGVUb2RvLCBoYW5kbGVBZGRUb2RvKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(name) {\r\n  return { name, todos: [] };\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCxXQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9zcmMvcHJvamVjdC5qcz9mNTliIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcclxuICByZXR1cm4geyBuYW1lLCB0b2RvczogW10gfTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/project.js\n\n}");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, dueDate, priority, status = \"In Progress\", notes = \"\") {\r\n  return { title, dueDate, priority, status, notes };\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCxXQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9zcmMvdG9kby5qcz8yNGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzID0gXCJJbiBQcm9ncmVzc1wiLCBub3RlcyA9IFwiXCIpIHtcclxuICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgbm90ZXMgfTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;