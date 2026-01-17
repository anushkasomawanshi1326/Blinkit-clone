import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutSummaryTest from '../CheckoutSummaryTest';
import useCart from '../hooks/useCart';
import useWishlist from '../hooks/useWishlist';

jest.mock('../hooks/useCart');
jest.mock('../hooks/useWishlist');

describe('CheckoutSummaryTest Component', () => {
  beforeEach(() => {
    useCart.mockReturnValue({ cartItems: [], totalPrice: 0 });
    useWishlist.mockReturnValue({ wishlist: [] });
  });

  it('renders Checkout Summary component with default props', () => {
    render(<CheckoutSummaryTest />);
    expect(screen.getByText('Checkout Summary')).toBeInTheDocument();
    expect(screen.getByText('🛒 Items in Cart: 0')).toBeInTheDocument();
    expect(screen.getByText('💰 Total Price: ₹0')).toBeInTheDocument();
    expect(screen.getByText('❤️ Wishlist Items: 0')).toBeInTheDocument();
  });

  it('renders PeakTime component when showPeakTime prop is true', () => {
    render(<CheckoutSummaryTest showPeakTime={true} />);
    expect(screen.getByText('Peak Time')).toBeInTheDocument();
  });

  it('does not render PeakTime component when showPeakTime prop is false', () => {
    render(<CheckoutSummaryTest showPeakTime={false} />);
    expect(screen.queryByText('Peak Time')).not.toBeInTheDocument();
  });

  it('displays correct item count and total price based on cart items', () => {
    useCart.mockReturnValue({ cartItems: [{ quantity: 2 }, { quantity: 3 }], totalPrice: 100 });
    render(<CheckoutSummaryTest />);
    expect(screen.getByText('Items in Cart: 5')).toBeInTheDocument();
    expect(screen.getByText('Total Price: ₹100')).toBeInTheDocument();
  });

  it('displays correct wishlist items count', () => {
    useWishlist.mockReturnValue({ wishlist: [{ id: 1 }, { id: 2 }] });
    render(<CheckoutSummaryTest />);
    expect(screen.getByText('Wishlist Items: 2')).toBeInTheDocument();
  });
});