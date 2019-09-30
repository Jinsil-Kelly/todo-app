import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import TodoList from '../components/TodoList';

afterEach(cleanup);

describe('<TodoList />', () => {
  const sampleTodos = [
    {
      id: 1,
      text: 'TDD-1',
      checked: false,
    },
    {
      id: 2,
      text: 'TDD-2',
      checked: false,
    },
    {
      id: 3,
      text: 'TDD-3',
      checked: true,
    },
  ];

  const setup = (props = {}) => {
    const initialProps = { todos: sampleTodos };
    const utils = render(<TodoList {...initialProps} {...props} />);
    const { getByText, getByTestId } = utils;
    const todos = props.todos || initialProps.todos;
    getByText(todos[0].text);
    getByText(todos[1].text);
    getByText(todos[2].text);
    const removeBtn = getByTestId(`removeBtn-${todos[0].id}`); // check if btn exists
    const toggleBtn = getByTestId(`toggleBtn-${todos[0].id}`); // check if btn exists
    return {
      ...utils,
      removeBtn,
      toggleBtn,
    };
  };

  it('calls onToggle and onRemove', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { toggleBtn, removeBtn } = setup({ onRemove, onToggle });

    fireEvent.click(toggleBtn);
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(removeBtn);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
