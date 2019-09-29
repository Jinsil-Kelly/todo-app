import React from 'react'
import { render, cleanup } from '@testing-library/react'
import TodoTemplate from './TodoTemplate'

afterEach(cleanup)

describe('<TodoTemplate />', () => {
  it('matches snapshot', () => {
    const utils = render(<TodoTemplate children="hohoho" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<TodoTemplate children="hohoho" />);
    utils.getByText('hohoho');
  });
});