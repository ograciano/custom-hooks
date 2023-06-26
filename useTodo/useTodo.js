import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const accion = {
      type: 'add',
      payload: todo,
    }
    dispatch(accion);
  }

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId,
    });
  };

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };

};
