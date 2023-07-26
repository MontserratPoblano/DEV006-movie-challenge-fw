import React from "react";
import { render, screen } from "@testing-library/react";
import {Explora} from "../pages/Explora";

// jest.mock("../utils/token", () => ({
//       API_TOKEN: "token_mock",
//     }));

test("Prueba el componente Explora",()=>{
    render(<Explora />)
    const titleElement=screen.getByText("Películas recomendadas")
    expect(titleElement).toBeInTheDocument();
})