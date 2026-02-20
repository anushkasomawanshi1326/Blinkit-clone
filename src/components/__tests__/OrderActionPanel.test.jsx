import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderActionPanel from "../OrderActionPanel";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn((userId) => ({
    items: userId ? [{ id: 1, name: "Product 1", quantity: 2 }] : [],
    totalPrice: 100,
  })),
}));

describe("OrderActionPanel Component", () => {
  it("renders loading message when user is not logged in", () => {
    render(<OrderActionPanel userId={null} />);

    expect(screen.getByText("User not logged in")).toBeInTheDocument();
  });

  it("renders cart items and actions when user is logged in", () => {
    render(<OrderActionPanel userId={1} />);

    expect(screen.getByText("Order Actions")).toBeInTheDocument();
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Review Order"));

    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("Items: 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    expect(screen.queryByText("Order Summary")).not.toBeInTheDocument();
  });
});