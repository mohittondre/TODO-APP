import { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      <div className="buttons">
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;