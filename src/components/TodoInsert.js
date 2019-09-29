import React, { useState, useCallback } from 'react';
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault(); // 새로고침을 방지함
    },
    [onInsert, value]
  );
  return (<form onSubmit={onSubmit} className="TodoInsert">
    <input placeholder="Write what you want to do" value={value} onChange={onChange}/>
    <button type='submit' data-testid="addTodoBtn"><MdAdd/></button>
  </form>)
};
// TodoInsert.defalutProps={
//   onInsert:(value)=>console.log(`${value} is inserted...!`)
// }
export default TodoInsert;


