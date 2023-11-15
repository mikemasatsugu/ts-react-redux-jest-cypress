import React, {ReactElement} from 'react'
import {render, screen, RenderOptions} from '@testing-library/react';
import '@testing-library/jest-dom'
import AddCountButton from './AddCountButton';

describe('AddCountButton.jsx', () => {
  const mockClickHandler = jest.fn();
  const {container, unmount} = render(<AddCountButton addClickHandler={mockClickHandler}/>);

  afterAll(() => {
    unmount();
  })

  it('should render a button that contains "ADD 1', () => {
    const button = screen.getByText('ADD 1');
    expect(button).toBeInTheDocument();
  });
  
})