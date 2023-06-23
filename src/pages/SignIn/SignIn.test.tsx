import {  render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SignIn } from './SignIn';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders mind& logo', () => {
    render(<SignIn />);
    const logoElement = screen.getByText(/mind&/i);
    expect(logoElement).toBeInTheDocument();
});

test('renders sign in button', () => {
  render(<SignIn />);
  const buttonElement = screen.getByRole('button', { name: /continue with google/i });
  expect(buttonElement).toBeInTheDocument();
});
