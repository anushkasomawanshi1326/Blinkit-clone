import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OrderActionPanel from "../OrderActionPanel";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn(() => ({ items: [], totalPrice: 0 })),
}));

describe("OrderActionPanel Component", () => {
  it("renders loading state when user is not logged in", () => {
    render(<OrderActionPanel userId={null} />);
    expect(screen.getByText("User not logged in")).toBeInTheDocument();
  });

  it("renders empty cart message when cart is empty", () => {
    render(<OrderActionPanel userId={1} />);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("displays cart items, coupon, delivery slot, total price, and review order button", () => {
    render(<OrderActionPanel userId={1} />);
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("Coupon")).toBeInTheDocument();
    expect(screen.getByText("Delivery Slot")).toBeInTheDocument();
    expect(screen.getByText("Total: ₹0")).toBeInTheDocument();
    expect(screen.getByText("Review Order")).toBeInTheDocument();
  });

  it("displays order summary when review order button is clicked", async () => {
    render(<OrderActionPanel userId={1} />);
    fireEvent.click(screen.getByText("Review Order"));
    await waitFor(() => {
      expect(screen.getByText("Order Summary")).toBeInTheDocument();
      expect(screen.getByText("Items: 0")).toBeInTheDocument();
      expect(screen.getByText("Close")).toBeInTheDocument();
    });
  });

  it("closes order summary when close button is clicked", async () => {
    render(<OrderActionPanel userId={1} />);
    fireEvent.click(screen.getByText("Review Order"));
    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => {
      expect(screen.queryByText("Order Summary")).toBeNull();
    });
  });

  // Add more test cases as needed
});