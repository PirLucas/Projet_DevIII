import React from "react";
import { render, screen } from '@testing-library/react'
import AffichageTemoignages from "../components/affichageTemoignages";
import {waitFor} from '@testing-library/react'
import {act} from "react-dom/test-utils";
import {wait} from "@testing-library/user-event/dist/utils";




test('MyComponent test', () => {

        render(<AffichageTemoignages/>);


act( async () => {
    await wait(1000)
    expect(screen.getByText('test')).toBeDefined();
});
        // I'd look for a real text here that is renderer when the data loads




});