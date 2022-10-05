import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import api from "../api";
import AnimalList from "./AnimalList";
import server from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("list animals", async () => {
    const response = await api.get("africa/animals");

    render(<AnimalList animals={response.data}/>);

    const animalCards = await screen.findAllByRole("animal");
    expect(animalCards).toHaveLength(2);
});

test("list animals with getALlByRole", async () => {

    const response = await api.get("africa/animals");

    render(<AnimalList animals={response.data}/>);

    const animalsCards = screen.getAllByRole("animal");
    expect(animalsCards).toHaveLength(2);
});
