import { DayOne } from './day-one';

const dayOne = new DayOne();

describe('GIVEN provided imput file', () => {
  describe('WHEN calling solveChallanges()', () => {
    const result = dayOne.solveChallanges();
    it('THEN return correct solutions', () => {
      expect(result).toEqual({ first: '69310', second: '206104' });
    });
  });
});
