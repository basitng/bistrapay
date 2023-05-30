const { render, fireEvent } = render(<User />);
    
    //Test 1: test email input
    const emailidentifier =  'input#email';
    //find the email input element
    const emailInputElement = container.querySelector(emailidentifier);
    //simulate a value to be entered 
    fireEvent.change(emailInputElement, {
        target: { value: 'test@example.com' },
    });
    //check that the value is really entered in the field
    expect(emailInputElement.value).toBe('test@example.com');
    
    
    //Test 2: test password input
    const passwordIdentifier =  'input#password';
    //find the password input element
    const passwordInputElement = container.querySelector(passwordIdentifier);
    //simulate a value to be entered 
    fireEvent.change(passwordInputElement, {
        target: { value: 'testpassword' },
    });
    //check that the value is really entered in the field
    expect(passwordInputElement.value).toBe('testpassword');