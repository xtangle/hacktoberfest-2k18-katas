import { mazes } from './mazes';

describe("mazes", () => {
  it("No smashes...", () => {
    expect(mazes(`5 4
1 1
0
U
R
D`)).toEqual("2 2");
    expect(mazes(`6 6
2 3
0
D
D
R
L
R
L
L
U`)).toEqual("1 5");
    expect(mazes(`6 6
4 4
0
L
U
U
R
D
L
L
L`)).toEqual("2 3");
  });

  it("With boulders...", () => {
    expect(mazes(`5 5
2 2
2
5 5
1 1
L
U
D`)).toEqual("1 3");
    expect(mazes(`6 7
4 3
4
1 1
5 1
3 4
4 6
L
D
D
L
D
D
D
R
U
U
R
D
L
L
U
R
L
U
U
U`)).toEqual("1 2");
  });
});
