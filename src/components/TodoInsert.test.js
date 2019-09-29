import React from 'react'
import { render, cleanup,fireEvent  } from '@testing-library/react'
import TodoInsert from './TodoInsert'

afterEach(cleanup);

describe('<TodoInsert />', () => {
  it('matches snapshot', () => {
    const utils = render(<TodoInsert />);
    expect(utils.container).toMatchSnapshot();
  });

  it('has input and a button', () => {
    const {  getByPlaceholderText } = render(<TodoInsert />);
    const inputNode = getByPlaceholderText('Write what you want to do');  // check if input exists
    expect(inputNode.value).toMatch('') //tests input value is empty
  });

  it('changes input', () => {
    const { getByPlaceholderText } = render(<TodoInsert />);
    const inputNode = getByPlaceholderText('Write what you want to do');
    fireEvent.change(inputNode, {
      target: {
        value: 'To make TDD'
      }
    });
    expect(inputNode.value).toMatch('To make TDD'); // test value
  });
});