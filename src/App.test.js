/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/01/2022 - 15:04:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/01/2022
    * - Author          : 
    * - Modification    : 
**/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
