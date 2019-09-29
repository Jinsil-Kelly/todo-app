import React from 'react';
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (<form className="TodoInsert">
    <input placeholder="Write what you want to do"/>
    <button><MdAdd/></button>
  </form>)
};

export default TodoInsert;
