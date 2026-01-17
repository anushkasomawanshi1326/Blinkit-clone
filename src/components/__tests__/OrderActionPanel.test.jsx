import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrderActionPanel from '../OrderActionPanel';
import useCart from '../hooks/useCart';

jest.mock('../hooks/useCart');

describe('OrderActionPanel Component', () => {
  beforeEach(() => {
    useCart.mockReturnValue({ items: [], totalPrice: 0 });
  });

  it('renders loading state when user is not logged in', () => {
    render(<OrderActionPanel userId={null} />);
    expect(screen.getByText('User not logged in')).toBeInTheDocument();
  });

  it('renders loading state initially and then displays order actions', () => {
    render(<OrderActionPanel userId={123} />);
    expect(screen.getByText('Loading order actions...')).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getByText('Order Actions')).toBeInTheDocument();
    }, 500);
  });

  it('displays cart items, coupon, delivery slot, total price, and review order button', () => {
    useCart.mockReturnValue({ items: [{ id: 1 }, { id: 2 }], totalPrice: 100 });
    render(<OrderActionPanel userId={123} />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Coupon')).toBeInTheDocument();
    expect(screen.getByText('Delivery Slot')).toBeInTheDocument();
    expect(screen.getByText('Total: ₹100')).toBeInTheDocument();
    expect(screen.getByText('Review Order')).toBeInTheDocument();
  });

  it('displays order summary when review order button is clicked', () => {
    useCart.mockReturnValue({ items: [{ id: 1 }, { id: 2 }], totalPrice: 100 });
    render(<OrderActionPanel userId={123} />);
    fireEvent.click(screen.getByText('Review Order'));
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Items: 2')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('closes order summary when close button is clicked', () => {
    useCart.mockReturnValue({ items: [{ id: 1 }, { id: 2 }], totalPrice: 100 });
    render(<OrderActionPanel userId={123} />);
    fireEvent.click(screen.getByText('Review Order'));
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Order Summary')).not.toBeInTheDocument();
  });
});