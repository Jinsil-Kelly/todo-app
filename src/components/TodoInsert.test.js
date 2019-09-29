import React from 'react'
import { render, cleanup,fireEvent  } from '@testing-library/react'
import TodoInsert from './TodoInsert'

afterEach(cleanup);

describe('<TodoInsert />', () => {
  const setup = (props = {}) => {
    const utils = render(<TodoInsert {...props} />);
    const { getByTestId, getByPlaceholderText } = utils;
    const inputNode = getByPlaceholderText('Write what you want to do');  // check if input exists
    const btnNode = getByTestId('addTodoBtn'); // check if btn exists
    return {
      ...utils,
      inputNode,
      btnNode
    };
  };

  it('matches snapshot', () => {
    const utils = render(<TodoInsert />);
    expect(utils.container).toMatchSnapshot();
  });
  it('has input and a button', () => {
    const { inputNode, btnNode } = setup();
    expect(inputNode).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(btnNode).toBeTruthy();
  });
  it('changes input', () => {
    const { inputNode } = setup();

    expect(inputNode.value).toMatch(''); //tests input value is empty

    fireEvent.change(inputNode, {
      target: {
        value: 'To make TDD'
      }
    });
    expect(inputNode.value).toMatch('To make TDD'); // test value
  });

  it('calls onInsert and clears input when btn is clicked', () => {
    const onInsert = jest.fn();
    const { inputNode,btnNode } = setup({onInsert});  //props가 필요할 땐 요렇게 넣어주어먀함
    fireEvent.change(inputNode, {
      target: {
        value: 'TDD 배우기'
      }
    });
    fireEvent.click(btnNode);
    expect(onInsert).toBeCalledWith('TDD 배우기'); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(inputNode).toHaveAttribute('value', ''); // input이 비워져야함
  });
});