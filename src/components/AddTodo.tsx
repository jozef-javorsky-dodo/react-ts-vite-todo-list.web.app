import React, { useState } from "react";

interface AddTodoProps {
  onAddTodo: (newTodo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Enter a new to-do item..."
        value={newTodo}
        onChange={handleInputChange}
        className="border border-gray-400 rounded px-3 py-2 mr-2 w-full text-gray-900"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
