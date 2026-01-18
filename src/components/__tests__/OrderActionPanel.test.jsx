import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderActionPanel from '../OrderActionPanel';

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn((userId) => ({ items: [{ id: 1 }, { id: 2 }], totalPrice: 100 })),
}));

describe("OrderActionPanel Component", () => {
  it("renders loading state when user is not logged in", () => {
    render(<OrderActionPanel userId={null} />);
    
    expect(screen.getByText("User not logged in")).toBeInTheDocument();
  });

  it("renders order actions when user is logged in and cart is not empty", () => {
    render(<OrderActionPanel userId={123} />);
    
    expect(screen.getByText("Order Actions")).toBeInTheDocument();
    expect(screen.getByText("Total: ₹100")).toBeInTheDocument();
    expect(screen.getByText("Review Order")).toBeInTheDocument();
  });

  it("renders 'Your cart is empty' message when cart is empty", () => {
    render(<OrderActionPanel userId={123} />);
    
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("shows order summary when 'Review Order' button is clicked", () => {
    render(<OrderActionPanel userId={123} />);
    
    fireEvent.click(screen.getByText("Review Order"));
    
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("Items: 2")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("closes order summary when 'Close' button is clicked", () => {
    render(<OrderActionPanel userId={123} />);
    
    fireEvent.click(screen.getByText("Review Order"));
    fireEvent.click(screen.getByText("Close"));
    
    expect(screen.queryByText("Order Summary")).not.toBeInTheDocument();
  });

  // Add more test cases as needed
});