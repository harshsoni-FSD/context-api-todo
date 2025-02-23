import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import "./todo.css";

function Todo() {
  const {
    todos,
    inputValue,
    editMode,
    editValue,
    setInputValue,
    addTodo,
    deleteTodo,
    enterEditMode,
    updateTodo,
    setEditValue,
  } = useContext(TodoContext);

  return (
    <div className="todo-container">
      <h2>TODO List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {editMode ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      ) : (
        <button onClick={addTodo}>ADD</button>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <div>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => enterEditMode(todo.id, todo.text)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
