import React from 'react';
import { useSelector } from 'react-redux';
import { insert, toggle, remove } from '../modules/todos';
import useActions from '../lib/useActions';
import TodoApp from '../components/TodoApp';

const TodosContainer = () => {
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos,
  }));

  const [onInsert, onToggle, onRemove] = useActions(
    [insert, toggle, remove],
    [],
  );

  return (
    <TodoApp
      todos={todos}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
