import React from 'react';
import { cleanup, render } from '@testing-library/react';
import TodoApp from '../components/TodoApp';

afterEach(cleanup);

describe('<TodoApp />', () => {
  it('renders TodoTemplate, TodoInsert and TodoList', () => {
    const { getByTestId } = render(<TodoApp/>);
    getByTestId('TodoTemplate'); // TodoInsert 존재유무 확인
    getByTestId('TodoInsert'); // TodoInsert 존재유무 확인
    getByTestId('TodoList'); // TodoList 존재유무 확인
  });
});