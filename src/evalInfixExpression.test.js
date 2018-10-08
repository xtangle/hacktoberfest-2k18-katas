import { evalInfixExpression } from './evalInfixExpression';

describe('evalInfixExpression', () => {
  it('evaluates infix expression', () => {
    expect(evalInfixExpression("10^3/(5*4)+10")).toEqual(60);
    expect(evalInfixExpression("1*7+80/40")).toEqual(9);
    expect(evalInfixExpression("2*(3+4)*5")).toEqual(70);
  });
});
