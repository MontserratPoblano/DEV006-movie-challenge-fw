import React from "react";
import { render, screen } from "@testing-library/react";
import {Details} from "../pages/Details";

jest.mock("../utils/token", () => ({
      API_TOKEN: "token_mock",
    }));

test("Prueba el componente Details",()=>{
    render(<Details />)
    expect(screen.getByText("Mavka: The Forest Song")).toBeInTheDocument();
})
