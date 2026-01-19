import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OrderSummaryTest from "../OrderSummaryTest";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  useCart: jest.fn(() => ({
    cartItems: [{ id: 1, name: "Product 1", price: 50 }, { id: 2, name: "Product 2", price: 100 }],
  })),
}));

describe("OrderSummaryTest Component", () => {
  it("renders loading state initially", () => {
    render(<OrderSummaryTest />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays order summary after loading", async () => {
    render(<OrderSummaryTest />);
    await waitFor(() => {
      expect(screen.getByText("🧾 Order Summary")).toBeInTheDocument();
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("Place Order ₹150")).toBeInTheDocument();
    });
  });

  it("displays 'No products available' message when no products are present", async () => {
    jest.spyOn(global, "setTimeout");
    global.setTimeout.mockImplementation((cb) => cb());
    jest.spyOn(React, "useEffect").mockImplementation((cb) => cb());
    
    jest.mock("../data/products", () => []);
    
    render(<OrderSummaryTest />);
    await waitFor(() => {
      expect(screen.getByText("No products available")).toBeInTheDocument();
    });
  });

  it("triggers alert when 'Place Order' button is clicked", async () => {
    render(<OrderSummaryTest />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.click(screen.getByText("Place Order ₹150"));
    expect(alertMock).toHaveBeenCalledWith("Order Placed!");
  });

  // Add more test cases as needed
});