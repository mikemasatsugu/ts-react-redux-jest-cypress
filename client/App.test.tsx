import React, {ReactElement} from 'react'
import {render, screen, RenderOptions} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

describe('App.jsx', () => {
  const {container, unmount} = render(<App />);

  afterAll(() => {
    unmount();
  });

  it('should render an h1 element and a button', async () => {
    const headers = await screen.getAllByRole('heading');
    const buttons = await screen.getAllByRole('button');
    expect(headers).toHaveLength(1);
    expect(buttons).toHaveLength(1);
  })
});
