import { render, screen } from '@testing-library/react'
import App from '../src/App'

test('renders Vite + React heading', () => {
  render(<App />)
  const linkElement = screen.getByText(/Vite \+ React/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders instruction to click logos', () => {
  render(<App />)
  const instructionElement = screen.getByText(/Click on the Vite and React logos to learn more/i)
  expect(instructionElement).toBeInTheDocument()
})
