import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          style={style}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <div data-testid="TodoList">
      {!!todos && (
        <List
          height={320}
          width={512}
          rowCount={todos.length}
          className="TodoList"
          rowHeight={57}
          list={todos}
          style={{ outline: 'none' }}
          rowRenderer={rowRenderer}
        />
      )}
    </div>
  );
};

export default React.memo(TodoList);
