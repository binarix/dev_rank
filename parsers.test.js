const { parseIsNotTheBest } = require('./parsers');
const { isNotTheBest } = require('./validators');

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
});
