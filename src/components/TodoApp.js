import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      checked: true,
    },
    {
      id: 2,
      text: 'react-testing-library 배우기',
      checked: false,
    },
  ]);
  const nextId = useRef(3); // 새로 추가 할 항목에서 사용 할 id

  const onInsert = useCallback(text => {
    // 새 항목 추가 후
    setTodos(todos =>
      todos.concat({
        id: nextId.current,
        text,
        checked: false,
      }),
    );
    // nextId 값에 1 더하기
    nextId.current += 1;
  }, []);

  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default TodoApp;
