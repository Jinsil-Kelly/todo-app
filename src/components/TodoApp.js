import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true
    },
    {
      id: 2,
      text: 'react-testing-library 배우기',
      done: true
    }
  ]);
  const nextId = useRef(3); // 새로 추가 할 항목에서 사용 할 id

  const onInsert = useCallback(
    text => {
      // 새 항목 추가 후
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          done: false
        })
      );
      // nextId 값에 1 더하기
      nextId.current += 1;
    },
    [todos]
  );
  return (<TodoTemplate>
    <TodoInsert/>
    {/*<TodoInsert onInsert={onInsert}/>*/}
  </TodoTemplate>)
};

export default TodoApp;
