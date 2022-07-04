import { add, defaultArguments } from "./defaultArguments";

const add2 = defaultArguments(add, { b: 9 });
const add3 = defaultArguments(add2, { b: 3, a: 2 });
const add4 = defaultArguments(add, { c: 3 });

describe("defaultArguments", () => {
  test("add2", () => {
    expect(add2(10)).toBe(19);
    expect(add2(10, 7)).toBe(17);
    expect(add2()).toBe(NaN);
  });
  test("add3", () => {
    expect(add3(10)).toBe(13);
    expect(add3()).toBe(5);
    expect(add3(undefined, 10)).toBe(12);
  });
  test("add4", () => {
    expect(add4(10)).toBe(NaN);
    expect(add4(10, 10)).toBe(20);
  });
});
