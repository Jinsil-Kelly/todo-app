import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (<div className="TodoList">
    {todos.map((todo)=><TodoListItem key={todo.id} onRemove={onRemove} onToggle={onToggle} todo={todo}/>)}
   </div>)
};

export default React.memo(TodoList);
