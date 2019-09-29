import React, { useCallback } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({todo,onRemove, onToggle}) => {
  const { id, text, checked } = todo;
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);
  return (
    <div className="TodoListItem">
      <div data-testid={`toggleBtn-${id}`} className={cn('checkbox', { checked })} onClick={toggle}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" data-testid={`removeBtn-${id}`} onClick={remove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );};

TodoListItem.defaultProps = { onRemove: (id)=>console.log(`${id} is removed`),onToggle: (id)=>console.log(`${id} is toggled`)};
export default React.memo(TodoListItem);
