import {render, screen } from "@testing-library/react";
import React from "react";

import Header from "./Header";

describe('should show title', () => {
    test('should show TO DO LIST', () => {
        const {asFragment} = render(<Header />);
        const text = screen.getByText(/TO DO LIST/i);
        expect(text).toBeInTheDocument();

        expect(asFragment(<Header />)).toMatchSnapshot();
    })
});