const { notBest, notWorst, notBestOrWorst } = require('./validators');

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

    it('should return false if developer is the last element', () => {
      const developer = 'Evan';
      const ranking = ['Jessie', 'John', 'Evan'];
      expect(notWorst(developer, ranking)).toEqual(false);
    });
  });

  describe('notBestOrWorst', () => {
    it('should return true if developer is not the first or last element', () => {
      const developer = 'John';
      const ranking = ['Jessie', 'John', 'Evan'];
      expect(notBestOrWorst(developer, ranking)).toEqual(true);
    });

    it('should return false if developer is the first element', () => {
      const developer = 'John';
      const ranking = ['John', 'Jessie', 'Evan'];
      expect(notBestOrWorst(developer, ranking)).toEqual(false);
    });
  });
});
