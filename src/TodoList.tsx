import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
