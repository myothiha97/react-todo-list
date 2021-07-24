export const setTodoStatus = (todos, currentTodo) => {
  return todos.map((todo) => {
    if (todo.id === currentTodo.id) {
      todo.isDone = !currentTodo.isDone;
      return todo;
    } else {
      return todo;
    }
  });
};
