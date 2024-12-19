import { myFunction } from "./myFunction";
import { describe, it, expect } from "vitest";

describe("myFunction Unit Test Suite", () => {
  it("should be return something", () => {
    expect(myFunction()).toBeDefined();
  });
});
