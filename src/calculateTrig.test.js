import { calculateTrig } from './calculateTrig';

describe('calculateTrig', () => {
	it('cos(10) is -0.8390715290764524', () => {
		expect(calculateTrig('cos', 10)).toEqual(-0.8390715290764524);
	});

	it('sin(90) is 0.8939966636005579', () => {
		expect(calculateTrig('sin', 90)).toEqual(0.8939966636005579);
	});

	it('tan(180) is 1.3386902103511544', () => {
		expect(calculateTrig('tan', 180)).toEqual(1.3386902103511544);
	});

	it('tan(0) is 0', () => {
		expect(calculateTrig('tan', 0)).toEqual(0);
	});
});
