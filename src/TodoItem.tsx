import React from 'react';

interface TodoItemProps {
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return (
    <li className="list-group-item">{text}</li>
  );
}

export default TodoItem;
