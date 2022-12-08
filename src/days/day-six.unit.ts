import { DaySix } from './day-six';

const daySix = new DaySix();

describe('GIVEN input of "mjqjpqmgbljsphdztnvjfqwrcgsmlb', () => {
  const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
  describe('WHEN calling areAllUnuique()', () => {
    const result = daySix.findStartMarkerPositionV2(input, 4);
    it('THEN return "7"', () => {
      expect(result).toEqual('7');
    });
  });
});

describe('GIVEN input of "bvwbjplbgvbhsrlpgdmjqwftvncz', () => {
  const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
  describe('WHEN calling areAllUnuique()', () => {
    const result = daySix.findStartMarkerPositionV2(input, 4);
    it('THEN return "5"', () => {
      expect(result).toEqual('5');
    });
  });
});

describe('GIVEN input of "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', () => {
  const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';
  describe('WHEN calling areAllUnuique()', () => {
    const result = daySix.findStartMarkerPositionV2(input, 4);
    it('THEN return "11"', () => {
      expect(result).toEqual('11');
    });
  });
});

describe('GIVEN input of "mjqjpqmgbljsphdztnvjfqwrcgsmlb', () => {
  const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
  describe('WHEN calling areAllUnuique()', () => {
    const result = daySix.findStartMarkerPositionV2(input, 14);
    it('THEN return "19"', () => {
      expect(result).toEqual('19');
    });
  });
});

describe('GIVEN input of "bvwbjplbgvbhsrlpgdmjqwftvncz', () => {
  const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
  describe('WHEN calling areAllUnuique()', () => {
    const result = daySix.findStartMarkerPositionV2(input, 14);
    it('THEN return "23"', () => {
      expect(result).toEqual('23');
    });
  });
});

describe('GIVEN input of "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', () => {
  const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
  describe('WHEN calling areAllUnuique()', () => {
    const result = daySix.findStartMarkerPositionV2(input, 14);
    it('THEN return "29"', () => {
      expect(result).toEqual('29');
    });
  });
});

describe('GIVEN provided imput file', () => {
  describe('WHEN calling solveChallanges()', () => {
    const result = daySix.solveChallanges();
    it('THEN return correct solutions', () => {
      expect(result).toEqual({ first: '1953', second: '2301' });
    });
  });
});
