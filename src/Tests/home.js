import React from 'react'
import { render, queries } from '@testing-library/react'


test('renders a message', () => {
    const { container, getByText } = render(<Greeting />)
    expect(getByText('Hello, world!')).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `)
})