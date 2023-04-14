import { fireEvent,render, screen     } from '@testing-library/react';
import React from 'react';

import ListItems from './List';


describe('List', () => {
    const setIsShowByName = jest.fn();
    it('should render search', () => {
        render(<ListItems setIsShowByName={setIsShowByName} />);
        const searchLabel = screen.getByText(/Search/i);
        expect(searchLabel).toBeInTheDocument();
    })
    it('input text in search', () => {
        render(<ListItems setIsShowByName={setIsShowByName} />);
        const searchInput = screen.getByLabelText('Search', {selector: 'input'});
        fireEvent.change(searchInput, {
            target: {
                value: 'abc'
            }
        })
        expect(searchInput.value).toBe('abc');
        expect(setIsShowByName.mock.calls).toHaveLength(1);
    });
})