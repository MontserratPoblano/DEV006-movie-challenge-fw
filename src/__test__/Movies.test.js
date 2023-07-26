
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Movies } from "../pages/Movies";
import {Header} from "../components/Header";
import {Search} from "../components/Search";

jest.mock("../components/Header", () => ({ __esModule: true, default: jest.fn() }));
jest.mock("../components/Search", () => ({ __esModule: true, default: jest.fn() }));

test("Testing Movies component", () => {
  render(
    <MemoryRouter>
      <Movies />
    </MemoryRouter>
  );

  // Check that the Header component is rendered with the correct props
  expect(Header).toHaveBeenCalledWith({
    inicio: "Inicio",
    option1: "Movies",
    option2: "Back",
    enlace1: "/",
    enlace2: "/Movies",
    enlace3: "/Explora",
  });

  // Check that the Search component is rendered
  expect(Search).toHaveBeenCalledTimes(1);
});
