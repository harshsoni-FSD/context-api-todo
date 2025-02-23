import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add Todo
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Enter Edit Mode
  const enterEditMode = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  };

  // Update Todo
  const updateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: editValue } : todo
    );
    setTodos(updatedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        inputValue,
        editMode,
        editId,
        editValue,
        setInputValue,
        addTodo,
        deleteTodo,
        enterEditMode,
        updateTodo,
        setEditValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
