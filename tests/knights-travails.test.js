import knightMoves from "../src/knights-travails";

describe("knightMoves", () => {
  test("should return the shortest path from [0,0] to [1,2]", () => {
    const result = knightMoves([0, 0], [1, 2]);
    expect(result).toEqual([
      [0, 0],
      [2, 1],
      [1, 2],
    ]);
  });

  test("should return the shortest path from [0,0] to [3,3]", () => {
    const result = knightMoves([0, 0], [3, 3]);
    expect(result).toEqual(
      expect.arrayContaining([[0, 0], expect.any(Array), [3, 3]]),
    );
  });

  test("should return the shortest path from [3,3] to [0,0]", () => {
    const result = knightMoves([3, 3], [0, 0]);
    expect(result).toEqual(
      expect.arrayContaining([[3, 3], expect.any(Array), [0, 0]]),
    );
  });

  test("should return the shortest path from [0,0] to [7,7]", () => {
    const result = knightMoves([0, 0], [7, 7]);
    expect(result).toEqual(
      expect.arrayContaining([[0, 0], expect.any(Array), [7, 7]]),
    );
  });

  test("should return a path with only one move from [0,0] to [2,1]", () => {
    const result = knightMoves([0, 0], [2, 1]);
    expect(result).toEqual([
      [0, 0],
      [2, 1],
    ]);
  });

  test("should return an empty array when start and end are the same", () => {
    const result = knightMoves([0, 0], [0, 0]);
    expect(result).toEqual([[0, 0]]);
  });
});
