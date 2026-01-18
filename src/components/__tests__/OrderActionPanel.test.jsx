import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderActionPanel from "../OrderActionPanel";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn((userId) => ({
    items: [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }],
    totalPrice: 200,
  })),
}));

describe("OrderActionPanel Component", () => {
  it("renders loading state when user is not logged in", () => {
    render(<OrderActionPanel userId={null} />);
    expect(screen.getByText("User not logged in")).toBeInTheDocument();
  });

  it("renders order actions when user is logged in and not loading", () => {
    render(<OrderActionPanel userId={1} />);
    expect(screen.getByText("Order Actions")).toBeInTheDocument();
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("displays cart items, total price, and review order button when items are present", () => {
    render(<OrderActionPanel userId={1} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Total: ₹200")).toBeInTheDocument();
    expect(screen.getByText("Review Order")).toBeInTheDocument();
  });

  it("displays order summary when review order button is clicked", () => {
    render(<OrderActionPanel userId={1} />);
    fireEvent.click(screen.getByText("Review Order"));
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("Items: 2")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("closes order summary when close button is clicked", () => {
    render(<OrderActionPanel userId={1} />);
    fireEvent.click(screen.getByText("Review Order"));
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByText("Order Summary")).toBeNull();
  });

  // Add more test cases as needed
});