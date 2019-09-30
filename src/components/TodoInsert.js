import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      value.toString().trim().length !== 0 ? onInsert(value) : alert('Enter something');
      setValue('');
      e.preventDefault(); // 새로고침을 방지함
    },
    [onInsert, value],
  );
  return (<form onSubmit={onSubmit} className="TodoInsert">
    <input placeholder="Write what you want to do" value={value} onChange={onChange}/>
    <button type='submit' data-testid="addTodoBtn"><MdAdd/></button>
  </form>);
};

export default TodoInsert;


