import React from "react";

interface TodoItemProps {
  todo: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-700">
      <span>{todo}</span>
      <button
        onClick={onDelete}
        className="delete-button font-bold py-1 px-2 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem; // Corrected line
