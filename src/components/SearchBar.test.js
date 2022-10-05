import React from "react";
import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "./SearchBar";

test("type", async () => {
    const onSubmit = (text) => {
        expect(text).toBe("lion");
        console.log(text);
    };

    render(<SearchBar onSubmit={onSubmit}/>);

    await userEvent.keyboard("lion{enter}");

    // const textBox = screen.getByRole("textbox")
    // fireEvent.change(textBox, {
    //     target: {
    //         value: "lion"
    //     }
    // });
    //
    // const form = screen.getByRole("search");
    // fireEvent.submit(form);
});
