const {
  isNotTheBest,
  isNotTheWorst,
  isNotTheBestOrTheWorst,
  isBetterThan,
  isNotDirectlyBelowOrAbove,
} = require('./validators');

describe('validators', () => {
  describe('isNotTheBest', () => {
    it('should return true if developer is not the first element', () => {
      const developer = 'Jessie';
      const ranking = ['Evan', 'Jessie', 'John'];
      expect(isNotTheBest(developer, ranking)).toEqual(true);
    });

    it('should return false if developer is the first element', () => {
      const developer = 'Jessie';
      const ranking = ['Jessie', 'Evan', 'John'];
      expect(isNotTheBest(developer, ranking)).toEqual(false);
    });
  });

  describe('isNotTheWorst', () => {
    it('should return true if developer is not the last element', () => {
      const developer = 'Evan';
      const ranking = ['Jessie', 'Evan', 'John'];
      expect(isNotTheWorst(developer, ranking)).toEqual(true);
    });

    it('should return false if developer is the last element', () => {
      const developer = 'Evan';
      const ranking = ['Jessie', 'John', 'Evan'];
      expect(isNotTheWorst(developer, ranking)).toEqual(false);
    });
  });

  describe('isNotTheBestOrTheWorst', () => {
    it('should return true if developer is not the first or last element', () => {
      const developer = 'John';
      const ranking = ['Jessie', 'John', 'Evan'];
      expect(isNotTheBestOrTheWorst(developer, ranking)).toEqual(true);
    });

    it('should return false if developer is the first element', () => {
      const developer = 'John';
      const ranking = ['John', 'Jessie', 'Evan'];
      expect(isNotTheBestOrTheWorst(developer, ranking)).toEqual(false);
    });

    it('should return false if developer is the last element', () => {
      const developer = 'John';
      const ranking = ['Evan', 'Jessie', 'John'];
      expect(isNotTheBestOrTheWorst(developer, ranking)).toEqual(false);
    });
  });

  describe('isBetterThan', () => {
    it('should return true if developer has a lower index than otherDeveloper', () => {
      const developer = 'Sarah';
      const otherDeveloper = 'Evan';
      const ranking = ['Sarah', 'Jessie', 'Evan'];
      expect(isBetterThan(developer, otherDeveloper, ranking)).toEqual(true);
    });

    it('should return false if developer has a higher index than otherDeveloper', () => {
      const developer = 'Sarah';
      const otherDeveloper = 'Evan';
      const ranking = ['Evan', 'Jessie', 'Sarah'];
      expect(isBetterThan(developer, otherDeveloper, ranking)).toEqual(false);
    });
  });

  describe('isNotDirectlyBelowOrAbove', () => {
    it('should return true if developer has index not directly below or above otherDeveloper', () => {
      const developer = 'Matt';
      const otherDeveloper = 'John';
      const ranking = ['Matt', 'Evan', 'John'];
      expect(
        isNotDirectlyBelowOrAbove(developer, otherDeveloper, ranking),
      ).toEqual(true);
    });

    it('should return false if developer has index directly below otherDeveloper', () => {
      const developer = 'Matt';
      const otherDeveloper = 'John';
      const ranking = ['Matt', 'John', 'Evan'];
      expect(
        isNotDirectlyBelowOrAbove(developer, otherDeveloper, ranking),
      ).toEqual(false);
    });

    it('should return false if developer has index directly above otherDeveloper', () => {
      const developer = 'Matt';
      const otherDeveloper = 'John';
      const ranking = ['John', 'Matt', 'Evan'];
      expect(
        isNotDirectlyBelowOrAbove(developer, otherDeveloper, ranking),
      ).toEqual(false);
    });
  });
});
