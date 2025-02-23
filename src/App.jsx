import React from "react";
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <div>
        <Todo />
      </div>
    </TodoProvider>
  );
}
