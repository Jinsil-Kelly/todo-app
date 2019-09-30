import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import TodoApp from '../components/TodoApp';

afterEach(cleanup);

describe('<TodoApp />', () => {
  it('matches snapshot', () => {
    const utils = render(<TodoApp />);
    expect(utils.container).toMatchSnapshot();
  });
  it('renders TodoTemplate, TodoInsert and TodoList', () => {
    const { getByTestId } = render(<TodoApp />);
    getByTestId('TodoTemplate'); // TodoInsert 존재유무 확인
    getByTestId('TodoInsert'); // TodoInsert 존재유무 확인
    getByTestId('TodoList'); // TodoList 존재유무 확인
  });

  it('renders two defaults todos', () => {
    const { getByText } = render(<TodoApp />);
    getByText('TDD 배우기');
    getByText('react-testing-library 배우기');
  });

  it('creates new todo', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <TodoApp />,
    );
    // 이벤트를 발생시켜서 새 항목을 추가하면
    fireEvent.change(getByPlaceholderText('Write what you want to do'), {
      target: {
        value: 'I am new Todo!!',
      },
    });
    fireEvent.click(getByTestId('addTodoBtn'));
    // 해당 항목이 보여져야합니다.
    getByText('I am new Todo!!');
  });

  it('toggles todo', () => {
    const { getByTestId } = render(<TodoApp />);
    const toggleBtn = getByTestId(`toggleBtn-1`);
    expect(toggleBtn).toHaveClass('checked');
    expect(toggleBtn).toHaveClass('checkbox');
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveClass('checkbox');
    expect(toggleBtn).not.toHaveClass('checked');
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveClass('checked');
    expect(toggleBtn).toHaveClass('checkbox');
  });

  it('removes todo', () => {
    const { getByTestId, getByText } = render(<TodoApp />);
    const todoText = getByText('TDD 배우기');
    const removeBtn = getByTestId(`removeBtn-1`);
    fireEvent.click(removeBtn);
    expect(todoText).not.toHaveTextContent('TDD 배우기');
    expect(todoText).toHaveTextContent('react-testing-library 배우기');
  });
});
