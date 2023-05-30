import React from "react";
    import { render } from "@testing-library/react";
    import App from "./_app";
    
    describe('_app', () => {
      it('should render successfully', async () => {
        const { baseElement } = render(<App />);
        expect(baseElement).toBeInTheDocument();
      });
    });