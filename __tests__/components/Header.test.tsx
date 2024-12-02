import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "@/components/Header";

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("has correct className", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toHaveClass(
      "fixed top-0 left-0 right-0 bg-[#f1f1f1] z-10"
    );
  });

  it("contains two div elements with correct classNames", () => {
    render(<Header />);
    expect(screen.getByTestId("header-left")).toHaveClass(
      "bg-header-left absolute top-0 left-0 h-[135px] w-[250px]"
    );
    expect(screen.getByTestId("header-right")).toHaveClass(
      "bg-header-right absolute top-0 left-[250px] right-0 h-[87px]"
    );
  });
});
