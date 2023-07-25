/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import  App  from "./App";

jest.mock("./utils/token", () => ({
  API_TOKEN: 'token_mock'
}))

describe("App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<App />);
    expect(getByText("Sign Up").textContent).toMatch(`Sign Up`);
  });
});
