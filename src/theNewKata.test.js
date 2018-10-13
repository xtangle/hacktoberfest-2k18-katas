describe('calculateTrig', () => {
    it('cos(90) is -0.44807361612', () => {
      expect(calculateTrig('cos', 90)).toEqual(-0.44807361612);
    });

    it('sin(0) is 0', () => {
      expect(calculateTrig('sin', 0)).toEqual(0);
    });

    it('tan(25) is -0.13352640702', () => {
      expect(calculateTrig('tan', 25)).toEqual(-0.13352640702);
    });

    it('tan(270) is 270', () => {
      expect(calculateTrig('tan', 270)).toEqual(-0.17883906379);
    });
  });
