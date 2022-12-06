import { DayFour } from './day-four';

const dayFour = new DayFour();

describe('GIVEN input of "4-6"', () => {
  const input = '4-6';
  describe('WHEN calling getRange()', () => {
    const result = dayFour.getRange(input);
    it('THEN return { start: 4, end: 6 }', () => {
      expect(result).toEqual({ start: 4, end: 6 });
    });
  });
});

describe('GIVEN input of "11-36"', () => {
  const input = '11-36';
  describe('WHEN calling getRange()', () => {
    const result = dayFour.getRange(input);
    it('THEN return { start: 11, end: 36 }', () => {
      expect(result).toEqual({ start: 11, end: 36 });
    });
  });
});

describe('GIVEN input of "2-4" & "6-8"', () => {
  const first = '2-4';
  const second = '6-8';
  describe('WHEN calling isFullyCoveredByOne()', () => {
    const result = dayFour.isFullyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(false);
    });
  });
});

describe('GIVEN input of "2-8" & "3-7"', () => {
  const first = '2-8';
  const second = '3-7';
  describe('WHEN calling isFullyCoveredByOne()', () => {
    const result = dayFour.isFullyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(true);
    });
  });
});

describe('GIVEN input of "6-6" & "4-6"', () => {
  const first = '6-6';
  const second = '4-6';
  describe('WHEN calling isFullyCoveredByOne()', () => {
    const result = dayFour.isFullyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(true);
    });
  });
});

describe('GIVEN input of "2-6" & "4-8"', () => {
  const first = '2-6';
  const second = '4-8';
  describe('WHEN calling isFullyCoveredByOne()', () => {
    const result = dayFour.isFullyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(false);
    });
  });
});

describe('GIVEN input of "2-4" & "6-8"', () => {
  const first = '2-4';
  const second = '6-8';
  describe('WHEN calling isPartlyCoveredByOne()', () => {
    const result = dayFour.isPartlyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(false);
    });
  });
});

describe('GIVEN input of "5-7" & "7-9"', () => {
  const first = '5-7';
  const second = '7-9';
  describe('WHEN calling isPartlyCoveredByOne()', () => {
    const result = dayFour.isPartlyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(true);
    });
  });
});

describe('GIVEN input of "2-8" & "3-7"', () => {
  const first = '2-8';
  const second = '3-7';
  describe('WHEN calling isPartlyCoveredByOne()', () => {
    const result = dayFour.isPartlyCoveredByOne(first, second);
    it('THEN return correct solutions', () => {
      expect(result).toEqual(true);
    });
  });
});

describe('GIVEN provided imput file', () => {
  describe('WHEN calling solveChallanges()', () => {
    const result = dayFour.solveChallanges();
    it('THEN return correct solutions', () => {
      expect(result).toEqual({ first: '657', second: '938' });
    });
  });
});
