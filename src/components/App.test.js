import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import server from "./mocks/server";


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => render(<App/>))

test("search zebra return only zebra", async () => {
    await userEvent.keyboard("zebra{enter}");
    const animalCard = await screen.findAllByRole("animal");

    expect(animalCard).toHaveLength(1);
});
