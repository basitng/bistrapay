import React from "react";
    import ReactDOM from "react-dom";
    import { WelcomeMessage } from "./WelcomeMessage.js";

    function App() {
      return (
        <div>
          <WelcomeMessage />
        </div>
      );
    }

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);

------------------------------------------------

import React from 'react';
import { render } from '@testing-library/react';
import WelcomeMessage from './WelcomeMessage.js';

describe('WelcomeMessage', () => {
    it('should render welcome message', () => {
        const { getByText } = render(<WelcomeMessage />);
    
        expect(getByText("Welcome!")).toBeInTheDocument();
    });
});