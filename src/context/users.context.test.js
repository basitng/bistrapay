import React, { createContext } from 'react';
        import { useState } from "react";
 
        export const UserContext = createContext();
 
        export const UserProvider = ({ children }) => {
            const [users, setUsers] = useState([
                {
                    id: 1,
                    username: 'alice',
                    age: 18
                },
                {
                    id: 2,
                    username: 'bob',
                    age: 23
                }
            ]);
            const [pageState, setPageState] = useState('list');
            const [selectedUser, setSelectedUser] = useState('');
            return (
                <UserContext.Provider
                    value={{
                        users,
                        pageState,
                        setPageState,
                        selectedUser,
                        setSelectedUser
                    }}
                >
                    {children}
                </UserContext.Provider>
            )
        }

import { UserContext, UserProvider } from './users.context';
import { render, fireEvent } from '@testing-library/react';

describe('Users Context', () => {
    test('Check if users in context is updated', () => {
        // Render the Context Provider
        const { getByTestId } = render(
            <UserProvider>
                <UserContext.Consumer>
                    {(context) => (
                        <button data-testid='user-button' onClick={() => context.setUsers([...context.users, {id: 3, username: 'caroline', age: 30}])}/>
                    )}
                </UserContext.Consumer>
            </UserProvider>);

        const button = getByTestId('user-button');
        fireEvent.click(button);

        expect(button).toBeInTheDocument();
        expect(context.users).toHaveLength(3);
    });

    test('Check if selectedUser in context is updated', () => {
        // Render the Context Provider
        const { getByTestId } = render(
            <UserProvider>
                <UserContext.Consumer>
                    {(context) => (
                        <button data-testid='selected-user-button' onClick={() => context.setSelectedUser('caroline')}/>
                    )}
                </UserContext.Consumer>
            </UserProvider>);

        const button = getByTestId('selected-user-button');
        fireEvent.click(button);

        expect(button).toBeInTheDocument();
        expect(context.selectedUser).toBe("caroline");
    });

    test('Check if pageState in context is updated', () => {
        // Render the Context Provider
        const { getByTestId } = render(
            <UserProvider>
                <UserContext.Consumer>
                    {(context) => (
                        <button data-testid='page-state-button' onClick={() => context.setPageState('detail')}/>
                    )}
                </UserContext.Consumer>
            </UserProvider>);

        const button = getByTestId('page-state-button');
        fireEvent.click(button);

        expect(button).toBeInTheDocument();
        expect(context.pageState).toBe("detail");
    });

});