import React from "react";
import TodoItem from "./TodoItem"; // Import TodoItem

interface TodoListProps {
  todos: string[];
  onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="my-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onDeleteTodo(index)}
        /> // Use TodoItem
      ))}
      {todos.length === 0 && (
        <p className="text-center text-gray-100">
          No to-dos yet. Add one above!
        </p>
      )}
    </ul>
  );
};

export default TodoList;
