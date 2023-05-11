import React from "react";
import { render, screen } from '@testing-library/react'
import Temoignages from '../components/Temoignages';

test("Example 1 renders successfully", () => {
    render(<Temoignages/>);

    const inputElement = screen.getAllByRole('textbox')

    for (let i in inputElement){
        expect(inputElement[i]).toBeInTheDocument();
    }

})