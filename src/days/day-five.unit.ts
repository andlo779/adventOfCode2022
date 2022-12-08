import { DayFive } from './day-five';

const dayFive = new DayFive();

describe('GIVEN imput of "move 1 from 2 to 1"', () => {
  const input = 'move 1 from 2 to 1';
  describe('WHEN calling parsInstruction()', () => {
    const result = dayFive.parsInstruction(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual({ amount: 1, from: 2, to: 1 });
    });
  });
});

describe('GIVEN imput of "move 13 from 2 to 11"', () => {
  const input = 'move 13 from 2 to 11';
  describe('WHEN calling parsInstruction()', () => {
    const result = dayFive.parsInstruction(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual({ amount: 13, from: 2, to: 11 });
    });
  });
});

describe('GIVEN imput of "A"', () => {
  const input = 'A';
  describe('WHEN calling isCrate()', () => {
    const result = dayFive.isCrate(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual(true);
    });
  });
});

describe('GIVEN imput of "["', () => {
  const input = '[';
  describe('WHEN calling isCrate()', () => {
    const result = dayFive.isCrate(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual(false);
    });
  });
});

describe('GIVEN imput of " "', () => {
  const input = ' ';
  describe('WHEN calling isCrate()', () => {
    const result = dayFive.isCrate(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual(false);
    });
  });
});

describe('GIVEN imput of 1', () => {
  const input = 1;
  describe('WHEN calling translatePossitionToStack()', () => {
    const result = dayFive.translatePossitionToStack(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual(1);
    });
  });
});

describe('GIVEN imput of 5', () => {
  const input = 5;
  describe('WHEN calling translatePossitionToStack()', () => {
    const result = dayFive.translatePossitionToStack(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual(2);
    });
  });
});

describe('GIVEN imput of 33', () => {
  const input = 33;
  describe('WHEN calling translatePossitionToStack()', () => {
    const result = dayFive.translatePossitionToStack(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual(9);
    });
  });
});

describe('GIVEN imput below(??)', () => {
  const input =
    '    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2';
  describe('WHEN calling processInput()', () => {
    const result = dayFive.processInput(input);
    it('THEN return correct answer', () => {
      expect(result).toEqual({ first: 'CMZ', second: 'MCD' });
    });
  });
});

describe('GIVEN provided imput file', () => {
  const day = new DayFive();
  describe('WHEN calling solveChallanges()', () => {
    const result = day.solveChallanges();
    it('THEN return correct solutions', () => {
      expect(result).toEqual({ first: 'VCTFTJQCG', second: 'GCFGLDNJZ' });
    });
  });
});
