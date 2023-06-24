import { render, screen } from "@testing-library/react";
import React from 'react';

import Header from "./Header";

describe('first test', () => {
    test('render header componenet', () => {
        render(<Header />)
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    })
});