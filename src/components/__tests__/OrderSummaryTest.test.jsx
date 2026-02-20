import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import OrderSummaryTest from "../OrderSummaryTest";

jest.mock("../hooks/useCart", () => ({
  useCart: jest.fn(() => ({
    cartItems: [{ id: 1, name: "Product 1", price: 50 }],
  })),
}));

describe("OrderSummaryTest Component", () => {
  it("renders skeleton while loading", () => {
    render(<OrderSummaryTest />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders order summary after loading", async () => {
    render(<OrderSummaryTest />);

    await waitFor(() => {
      expect(screen.getByText("🧾 Order Summary")).toBeInTheDocument();
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Place Order ₹50")).toBeInTheDocument();
    });
  });

  it("displays alert when place order button is clicked", async () => {
    render(<OrderSummaryTest />);

    await waitFor(() => {
      const placeOrderButton = screen.getByText("Place Order ₹50");
      fireEvent.click(placeOrderButton);
      expect(window.alert).toHaveBeenCalledWith("Order Placed!");
    });
  });
});