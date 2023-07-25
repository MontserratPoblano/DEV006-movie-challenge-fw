import React from "react";
import {render} from "@testing-library/react";
import { Header } from "../components/Header";

jest.mock("../utils/token", () => ({
    API_TOKEN: 'token_mock'
}))

describe("<search carga el formulario y renderiza las peliculas ",()=>{
    const wrapper=render(<Header />);
    console.log(wrapper)
})