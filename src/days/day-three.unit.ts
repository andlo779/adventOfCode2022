import { DayThree } from './day-three';

const dayThree = new DayThree();

describe('GIVEN input of a', () => {
  const input = 'a';
  describe('WHEN calling getWeight()', () => {
    const result = dayThree.getWeight(input);
    it('THEN return 1', () => {
      expect(result).toBe(1);
    });
  });
});

describe('GIVEN input of A', () => {
  const input = 'A';
  describe('WHEN calling getWeight()', () => {
    const result = dayThree.getWeight(input);
    it('THEN return 27', () => {
      expect(result).toBe(27);
    });
  });
});

describe('GIVEN input of "vJrwpWtwJgWrhcsFMMfFFhFp"', () => {
  const input = 'vJrwpWtwJgWrhcsFMMfFFhFp';
  describe('WHEN calling getWeight()', () => {
    const result = dayThree.identifyDublicates(input);
    it('THEN return "p"', () => {
      expect(result).toBe('p');
    });
  });
});

describe('GIVEN input of "vJrwpWtwJgWrhcsFMMfFFhFp" & "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL" & "PmmdzqPrVvPwwTWBwg"', () => {
  const firstBackpack = 'vJrwpWtwJgWrhcsFMMfFFhFp';
  const secondBackpack = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL';
  const thirdBackpack = 'PmmdzqPrVvPwwTWBwg';
  describe('WHEN calling getWeight()', () => {
    const result = dayThree.findBadge(firstBackpack, secondBackpack, thirdBackpack);
    it('THEN return "r"', () => {
      expect(result).toBe('r');
    });
  });
});
