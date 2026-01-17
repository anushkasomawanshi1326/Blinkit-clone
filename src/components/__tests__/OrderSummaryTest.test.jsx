import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OrderSummaryTest from "../OrderSummaryTest";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  useCart: jest.fn(() => ({
    cartItems: [{ id: 1, name: "Product 1", price: 20 }],
  })),
}));

describe("OrderSummaryTest", () => {
  it("renders loading skeleton initially", () => {
    render(<OrderSummaryTest />);
    
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays order summary with products and total price after loading", async () => {
    render(<OrderSummaryTest />);
    
    await waitFor(() => {
      expect(screen.getByText("🧾 Order Summary")).toBeInTheDocument();
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Place Order ₹20")).toBeInTheDocument();
    });
  });

  it("displays 'No products available' message when no products are present", async () => {
    jest.spyOn(global, "setTimeout");
    global.setTimeout.mockImplementation((cb) => cb());
    
    render(<OrderSummaryTest />);
    
    await waitFor(() => {
      expect(screen.getByText("No products available")).toBeInTheDocument();
    });
  });

  it("alerts 'Order Placed!' when 'Place Order' button is clicked", async () => {
    render(<OrderSummaryTest />);
    
    global.alert = jest.fn();
    fireEvent.click(screen.getByText("Place Order ₹20"));
    
    expect(global.alert).toHaveBeenCalledWith("Order Placed!");
  });
});