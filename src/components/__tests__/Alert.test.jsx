import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../Alert';

describe('Alert Component', () => {
  it('renders with default "info" type', () => {
    const { getByTestId } = render(<Alert message="Test Message" />);
    const alertElement = getByTestId('alert');
    expect(alertElement).toHaveTextContent('Test Message');
    expect(alertElement).toHaveStyle({ backgroundColor: '#2563eb' });
  });

  it('renders with "success" type', () => {
    const { getByTestId } = render(<Alert type="success" message="Success Message" />);
    const alertElement = getByTestId('alert');
    expect(alertElement).toHaveTextContent('Success Message');
    expect(alertElement).toHaveStyle({ backgroundColor: '#16a34a' });
  });

  it('renders with "error" type', () => {
    const { getByTestId } = render(<Alert type="error" message="Error Message" />);
    const alertElement = getByTestId('alert');
    expect(alertElement).toHaveTextContent('Error Message');
    expect(alertElement).toHaveStyle({ backgroundColor: '#dc2626' });
  });
});