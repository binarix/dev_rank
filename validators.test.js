const { notBest, notWorst } = require('./validators');

describe('validators', () => {
  describe('notBest', () => {
    it('should return true if developer is not the first element', () => {
      const developer = 'Jessie';
      const ranking = ['Evan', 'Jessie', 'John'];
      expect(notBest(developer, ranking)).toEqual(true);
    });

    it('should return false if developer is the first element', () => {
      const developer = 'Jessie';
      const ranking = ['Jessie', 'Evan', 'John'];
      expect(notBest(developer, ranking)).toEqual(false);
    });
  });

  describe('notWorst', () => {
    it('should return true if developer is not the last element', () => {
      const developer = 'Evan';
      const ranking = ['Jessie', 'Evan', 'John'];
      expect(notWorst(developer, ranking)).toEqual(true);
    });
  });
});
