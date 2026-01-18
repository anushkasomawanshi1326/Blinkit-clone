import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderSummaryTest from '../OrderSummaryTest';

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  useCart: jest.fn(() => ({ cartItems: [{ id: 1, price: 50 }, { id: 2, price: 75 }] })),
}));

describe("OrderSummaryTest Component", () => {
  it("renders loading skeleton while fetching data", () => {
    render(<OrderSummaryTest />);
    
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders order summary with products and total price after loading", async () => {
    render(<OrderSummaryTest />);
    
    await screen.findByText("🧾 Order Summary");
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Place Order ₹125")).toBeInTheDocument();
  });

  it("displays 'No products available' message when products array is empty", async () => {
    jest.mock("../data/products", () => []);
    
    render(<OrderSummaryTest />);
    
    await screen.findByText("No products available");
  });

  it("triggers alert when 'Place Order' button is clicked", async () => {
    render(<OrderSummaryTest />);
    
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    
    fireEvent.click(screen.getByText("Place Order ₹125"));
    
    expect(alertMock).toHaveBeenCalledWith("Order Placed!");
  });

  // Add more test cases as needed
});