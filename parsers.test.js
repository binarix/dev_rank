const {
  parseIsNotTheBest,
  parseIsNotTheWorst,
  parseIsNotTheBestOrTheWorst,
  parseIsBetterThan,
} = require('./parsers');
const {
  isNotTheBest,
  isNotTheWorst,
  isNotTheBestOrTheWorst,
  isBetterThan,
} = require('./validators');

jest.mock('./validators');

describe('parsers', () => {
  afterEach(() => jest.resetAllMocks());

  describe('parseIsNotTheBest', () => {
    it('should return isNotTheBest validator with correct parameters if knowledgeStatement matches', () => {
      const expected = 'isNotTheBest';
      isNotTheBest.mockReturnValueOnce(expected);
      const knowledgeStatement = 'Jessie is not the best developer';
      const result = parseIsNotTheBest(knowledgeStatement);
      expect(isNotTheBest).toBeCalledWith('Jessie');
      expect(result).toEqual(expected);
    });

    it('should return null if knowledgeStatement does not match', () => {
      const knowledgeStatement = 'Jessie is the best developer';
      const result = parseIsNotTheBest(knowledgeStatement);
      expect(isNotTheBest).not.toBeCalled();
      expect(result).toEqual(null);
    });
  });

  describe('parseIsNotTheWorst', () => {
    it('should return isNotTheWorst validator with correct parameters if knowledgeStatement matches', () => {
      const expected = 'isNotTheWorst';
      isNotTheWorst.mockReturnValueOnce(expected);
      const knowledgeStatement = 'Evan is not the worst developer';
      const result = parseIsNotTheWorst(knowledgeStatement);
      expect(isNotTheWorst).toBeCalledWith('Evan');
      expect(result).toEqual(expected);
    });

    it('should return null if knowledgeStatement does not match', () => {
      const knowledgeStatement = 'Evan is the worst developer';
      const result = parseIsNotTheWorst(knowledgeStatement);
      expect(isNotTheWorst).not.toBeCalled();
      expect(result).toEqual(null);
    });
  });

  describe('parseIsNotTheBestOrTheWorst', () => {
    it('should return isNotTheBestOrTheWorst validator with correct parameters if knowledgeStatement matches', () => {
      const expected = 'isNotTheBestOrTheWorst';
      isNotTheBestOrTheWorst.mockReturnValueOnce(expected);
      const knowledgeStatement =
        'John is not the best developer or the worst developer';
      const result = parseIsNotTheBestOrTheWorst(knowledgeStatement);
      expect(isNotTheBestOrTheWorst).toBeCalledWith('John');
      expect(result).toEqual(expected);
    });

    it('should return null if knowledgeStatement does not match', () => {
      const knowledgeStatement =
        'John is the best developer or the worst developer';
      const result = parseIsNotTheBestOrTheWorst(knowledgeStatement);
      expect(isNotTheBestOrTheWorst).not.toBeCalled();
      expect(result).toEqual(null);
    });
  });

  describe('parseIsBetterThan', () => {
    it('should return isBetterThan validator with correct parameters if knowledgeStatement matches', () => {
      const expected = 'isBetterThan';
      isBetterThan.mockReturnValueOnce(expected);
      const knowledgeStatement = 'Sarah is a better developer than Evan';
      const result = parseIsBetterThan(knowledgeStatement);
      expect(isBetterThan).toBeCalledWith('Sarah', 'Evan');
      expect(result).toEqual(expected);
    });
  });
});
