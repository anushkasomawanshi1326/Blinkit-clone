import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutSummaryTest from '../CheckoutSummaryTest';

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: jest.fn(() => ({ cartItems: [{ quantity: 2 }, { quantity: 3 }], totalPrice: 100 })),
}));

jest.mock("../hooks/useWishlist", () => ({
  __esModule: true,
  default: jest.fn(() => ({ wishlist: [{ id: 1 }, { id: 2 }] })),
}));

describe("CheckoutSummaryTest Component", () => {
  it("renders checkout summary with default props", () => {
    render(<CheckoutSummaryTest />);
    
    expect(screen.getByText("Checkout Summary")).toBeInTheDocument();
    expect(screen.getByText("🛒 Items in Cart: 5")).toBeInTheDocument();
    expect(screen.getByText("💰 Total Price: ₹100")).toBeInTheDocument();
    expect(screen.getByText("❤️ Wishlist Items: 2")).toBeInTheDocument();
  });

  it("renders peak time component when showPeakTime prop is true", () => {
    render(<CheckoutSummaryTest showPeakTime={true} />);
    
    expect(screen.getByText("Peak Time")).toBeInTheDocument();
  });

  it("does not render peak time component when showPeakTime prop is false", () => {
    render(<CheckoutSummaryTest showPeakTime={false} />);
    
    expect(screen.queryByText("Peak Time")).not.toBeInTheDocument();
  });

  it("calculates item count correctly", () => {
    render(<CheckoutSummaryTest />);
    
    expect(screen.getByText("🛒 Items in Cart: 5")).toBeInTheDocument();
  });

  it("displays correct total price", () => {
    render(<CheckoutSummaryTest />);
    
    expect(screen.getByText("💰 Total Price: ₹100")).toBeInTheDocument();
  });

  // Add more test cases as needed
});