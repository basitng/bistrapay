import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import Index from './index';

describe('Index Component', () => {
 
    afterEach(cleanup);

    it("it should render index component successfully", () => {
        const { container } = render(<Index />);
        expect(container).toBeInTheDocument();
    });

    it("it should contain 'Welcome to React App' text", async () => {
        const { findByText } = render(<Index />);
        const welcomeText = await waitForElement(() => findByText("Welcome to React App"));
        expect(welcomeText).toBeInTheDocument();
    });

});