import { sum } from "../src/sum.js";

test("adds numbers correctly", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds others numbers correctly", () => {
  expect(sum(3, 2)).toBe(5);
});
