None
        
        // Test Suite
    describe("Hello component", () => {
        // Test Case 1
        test("should render a button with the text `Say hello`", () => {
            // Set up our document body
            document.body.innerHTML = `<div>
                              <button>Say hello</button>
                            </div>`;

            // Get the button element
            const buttonElement = document.querySelector('button');

            // Assert the button element text is equal to the expected text. 
            expect(buttonElement.textContent).toBe('Say hello');
        });

        // Test Case 2
        test("should display 'Hello World' when the button is clicked", () => {
            // Set up the document body
            document.body.innerHTML = `<div>
                              <button>Say hello</button>
                              <div id="helloDiv"></div>
                            </div>`;

            // Get the button element
            const buttonElement = document.querySelector('button');
            // Simulate a click event    
            buttonElement.click();

            // Get the element we want to test the result on
            const divElement = document.querySelector('#helloDiv');

            // Assert the div element text is equal to the expected text.
            expect(divElement.textContent).toBe('Hello World');
        });
    });