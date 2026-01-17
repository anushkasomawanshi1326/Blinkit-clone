import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutSummaryTest from "../CheckoutSummaryTest";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    cartItems: [
      { id: 1, name: "Product 1", quantity: 2 },
      { id: 2, name: "Product 2", quantity: 1 },
    ],
    totalPrice: 100,
  })),
}));

jest.mock("../hooks/useWishlist", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    wishlist: [{ id: 1, name: "Wishlist Product 1" }],
  })),
}));

describe("CheckoutSummaryTest", () => {
  it("renders checkout summary with correct items and total price", () => {
    render(<CheckoutSummaryTest />);
    
    expect(screen.getByText("Checkout Summary")).toBeInTheDocument();
    expect(screen.getByText("Items in Cart: 3")).toBeInTheDocument();
    expect(screen.getByText("Total Price: ₹100")).toBeInTheDocument();
    expect(screen.getByText("Wishlist Items: 1")).toBeInTheDocument();
  });

  it("renders PeakTime component when showPeakTime prop is true", () => {
    render(<CheckoutSummaryTest showPeakTime={true} />);
    
    expect(screen.getByText("PeakTime")).toBeInTheDocument();
  });

  it("does not render PeakTime component when showPeakTime prop is false", () => {
    render(<CheckoutSummaryTest showPeakTime={false} />);
    
    expect(screen.queryByText("PeakTime")).not.toBeInTheDocument();
  });
});