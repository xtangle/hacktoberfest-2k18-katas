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
U`)).toEqual("1 4");
// start 2 3 => D 2 4, D 2 5, R 3 5, L 2 5, R 3 5, L 2 5, L 1 5, U 1 4 => end 1 4
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
L`)).toEqual("1 3");
// start 4 4 => L 3 4, U 3 3, U 3 2, R 4 2, D 4 3, L 3 3, L 2 3, L 1 3 => end
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
