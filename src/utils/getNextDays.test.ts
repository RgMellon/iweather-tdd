import { getNextDays } from "./getNextDays";

describe("getNextDays()", () => {
  it("should be return the next five days", () => {
    const nextDays = getNextDays();

    expect(nextDays.length).toBe(5);
  });
});
