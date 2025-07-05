
import React from "react";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";

describe("Card", () => {
  it("renders correctly", () => {
    render(<Card data-testid="card">Card content</Card>);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Card variant="outlined" data-testid="card">Card content</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("card-outlined");
  });

  it("applies size classes", () => {
    render(<Card size="lg" data-testid="card">Card content</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("card-lg");
  });

  it("applies shadow class when shadow prop is true", () => {
    render(<Card shadow data-testid="card">Card content</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("shadow");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Card</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renders card components together", () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );
    
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });
});
