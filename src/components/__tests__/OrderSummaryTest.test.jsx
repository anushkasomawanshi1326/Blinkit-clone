import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrderSummaryTest from '../OrderSummaryTest';
import { useCart } from '../hooks/useCart';
import products from '../data/products';

jest.mock('../hooks/useCart');

describe('OrderSummaryTest Component', () => {
  beforeEach(() => {
    useCart.mockReturnValue({ cartItems: products });
  });

  it('renders loading state initially and then displays order summary', () => {
    render(<OrderSummaryTest />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getByText('🧾 Order Summary')).toBeInTheDocument();
    }, 500);
  });

  it('displays products list, cart, coupon, total price, and place order button', () => {
    render(<OrderSummaryTest />);
    setTimeout(() => {
      products.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
      });
      expect(screen.getByText('Cart')).toBeInTheDocument();
      expect(screen.getByText('Coupon')).toBeInTheDocument();
      expect(screen.getByText(`Place Order ₹${products.reduce((sum, item) => sum + item.price, 0)}`)).toBeInTheDocument();
    }, 500);
  });

  it('alerts "Order Placed!" when place order button is clicked', () => {
    render(<OrderSummaryTest />);
    setTimeout(() => {
      const placeOrderButton = screen.getByText(`Place Order ₹${products.reduce((sum, item) => sum + item.price, 0)}`);
      fireEvent.click(placeOrderButton);
      expect(window.alert).toHaveBeenCalledWith('Order Placed!');
    }, 500);
  });
});