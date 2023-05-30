import React from "react";
    import { Manage } from "./manage";
    
    import { render, fireEvent } from "@testing-library/react";
    
    describe("Manage", () => {
      let container;
    
      beforeEach(() => {
        container = render(<Manage />);
      });
    
      afterEach(() => {
        container.unmount();
      });
    
      it("should render a title", () => {
        const titleElement = container.getByText("Manage");
        expect(titleElement).toBeInTheDocument();
      });
    
      it("should render six buttons", () => {
        const inputButtons = container.queryAllByRole("button");
        expect(inputButtons).toHaveLength(6);
    
        expect(inputButtons[0]).toHaveTextContent("Add");
        expect(inputButtons[1]).toHaveTextContent("Subtract");
        expect(inputButtons[2]).toHaveTextContent("Multiply");
        expect(inputButtons[3]).toHaveTextContent("Divide");
        expect(inputButtons[4]).toHaveTextContent("Reset");
        expect(inputButtons[5]).toHaveTextContent("Randomize");
      });
    
      it("should reset the total when the Reset button is clicked", () => {
        container.getByText("Reset").click();
        const totalElement = container.getByTestId("total");
        expect(totalElement).toHaveTextContent("Total: 0");
      });
    
      it("should update the total when the Add button is clicked", () => {
        container.getByText("Add").click();
        const totalElement = container.getByTestId("total");
        expect(totalElement).toHaveTextContent("Total: 1");
      });
    
      it("should update the total when the Subtract button is clicked", () => {
        container.getByText("Subtract").click();
        const totalElement = container.getByTestId("total");
        expect(totalElement).toHaveTextContent("Total: -1");
      });
    
      it("should update the total when the Multiply button is clicked", () => {
        container.getByText("Multiply").click();
        const totalElement = container.getByTestId("total");
        expect(totalElement).toHaveTextContent("Total: 0");
      });
    
      it("should update the total when the Divide button is clicked", () => {
        container.getByText("Divide").click();
        const totalElement = container.getByTestId("total");
        expect(totalElement).toHaveTextContent("Total: 0");
      });
    
      it("should update the total with a random number when the Randomize button is clicked", () => {
        const initialTotal = container.getByTestId("total");
        expect(initialTotal).toHaveTextContent("Total: 0");
    
        container.getByText("Randomize").click();
        const finalTotal = container.getByTestId("total");
        expect(finalTotal).not.toEqual(initialTotal);
      });
    });