import { DayTwo } from './day-two';

const dayTwo = new DayTwo();

describe('GIVEN provided imput file', () => {
  describe('WHEN calling solveChallanges()', () => {
    const result = dayTwo.solveChallanges();
    it('THEN return correct solutions', () => {
      expect(result).toEqual({ first: '11841', second: '13022' });
    });
  });
});
