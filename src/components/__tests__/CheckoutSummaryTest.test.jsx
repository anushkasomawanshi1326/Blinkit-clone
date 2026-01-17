import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutSummaryTest from "../CheckoutSummaryTest";

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn(() => ({ cartItems: [], totalPrice: 0 })),
}));

jest.mock("../hooks/useWishlist", () => ({
  __esModule: true,
  default: jest.fn(() => ({ wishlist: [] })),
}));

describe("CheckoutSummaryTest Component", () => {
  it("renders checkout summary with default props", () => {
    render(<CheckoutSummaryTest />);
    expect(screen.getByText("Checkout Summary")).toBeInTheDocument();
    expect(screen.getByText("🛒 Items in Cart: 0")).toBeInTheDocument();
    expect(screen.getByText("💰 Total Price: ₹0")).toBeInTheDocument();
    expect(screen.getByText("❤️ Wishlist Items: 0")).toBeInTheDocument();
  });

  it("renders peak time component when showPeakTime prop is true", () => {
    render(<CheckoutSummaryTest showPeakTime={true} />);
    expect(screen.getByText("Peak Time")).toBeInTheDocument();
  });

  it("does not render peak time component when showPeakTime prop is false", () => {
    render(<CheckoutSummaryTest showPeakTime={false} />);
    expect(screen.queryByText("Peak Time")).toBeNull();
  });

  it("displays correct item count and total price based on cart items", () => {
    render(<CheckoutSummaryTest />);
    expect(screen.getByText("Items in Cart: 0")).toBeInTheDocument();
    expect(screen.getByText("Total Price: ₹0")).toBeInTheDocument();
  });

  // Add more test cases as needed
});