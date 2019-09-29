import React from 'react'
import { render, cleanup,fireEvent  } from '@testing-library/react'
import TodoListItem from './TodoListItem'

afterEach(cleanup);

describe('<TodoListItem />', () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    checked: false
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoListItem {...initialProps} {...props} />);
    const { getByText,getByTestId } = utils;
    const todo = props.todo || initialProps.todo;
    const todoText = getByText(todo.text);
    const removeBtn = getByTestId(`removeBtn-${todo.id}`); // check if btn exists
    const toggleBtn = getByTestId(`toggleBtn-${todo.id}`); // check if btn exists
    return {
      ...utils,
      todoText,
      removeBtn,
      toggleBtn
    };
  };

  it('has todoText, toggleBtn and removeBtn', () => {
    const { todoText, toggleBtn, removeBtn} = setup();
    expect(todoText).toBeTruthy();
    expect(removeBtn).toBeTruthy();
    expect(toggleBtn).toBeTruthy();
  });

  it('shows line-through on the text when checkBox is checked', () => {
    const { toggleBtn } = setup({ todo: { ...sampleTodo, checked: true } });
    expect(toggleBtn).toHaveClass('checkbox');
    expect(toggleBtn).toHaveClass('checked')

  });

  it('does not show line-through on the text when checkBox is not checked', () => {
    const { toggleBtn } = setup({ todo: { ...sampleTodo, checked: false } });
    expect(toggleBtn).toHaveClass('checkbox');
    expect(toggleBtn).not.toHaveClass('checked')
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();
    const { toggleBtn } = setup({ onToggle });
    fireEvent.click(toggleBtn);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it('calls onRemove', () => {
    const onRemove = jest.fn();
    const { removeBtn } = setup({ onRemove });
    fireEvent.click(removeBtn);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});