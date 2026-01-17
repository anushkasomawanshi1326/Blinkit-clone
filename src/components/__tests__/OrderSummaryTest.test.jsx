import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OrderSummaryTest from "../OrderSummaryTest";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  useCart: jest.fn(() => ({ cartItems: [] })),
}));

describe("OrderSummaryTest Component", () => {
  it("renders loading state with Skeleton component", () => {
    render(<OrderSummaryTest />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays products list, Cart, Coupon, and Place Order button", async () => {
    render(<OrderSummaryTest />);
    await waitFor(() => {
      expect(screen.getByText("🧾 Order Summary")).toBeInTheDocument();
      expect(screen.queryByText("No products available")).toBeNull();
      expect(screen.getByText("Cart")).toBeInTheDocument();
      expect(screen.getByText("Coupon")).toBeInTheDocument();
      expect(screen.getByText("Place Order ₹0")).toBeInTheDocument();
    });
  });

  it("displays product names from the list", async () => {
    render(<OrderSummaryTest />);
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("Product 3")).toBeInTheDocument();
    });
  });

  it("shows alert when Place Order button is clicked", () => {
    render(<OrderSummaryTest />);
    fireEvent.click(screen.getByText("Place Order ₹0"));
    expect(window.alert).toHaveBeenCalledWith("Order Placed!");
  });

  // Add more test cases as needed
});