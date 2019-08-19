const {
  validatorsFromKnowledgeStatements,
} = require('./validatorsFromKnowledgeStatements');
const {
  parseIsNotTheBest,
  parseIsNotTheWorst,
  parseIsNotTheBestOrTheWorst,
  parseIsBetterThan,
  parseIsNotDirectlyBelowOrAbove,
} = require('./parsers');
const { knowledgeStatements } = require('./knowledgeStatements');

jest.mock('./parsers');
jest.mock('./knowledgeStatements');

describe('validatorsFromKnowledgeStatements', () => {
  afterEach(() => jest.resetAllMocks());

  it('should return correct validators', () => {
    const expected = 'isNotTheBest';
    knowledgeStatements.mockReturnValue([
      'Jessie is the best developer',
      'Jessie is not the best developer',
    ]);
    parseIsNotTheBest.mockReturnValueOnce(null);
    parseIsNotTheBest.mockReturnValueOnce(expected);
    parseIsNotTheWorst.mockReturnValue(null);
    parseIsNotTheBestOrTheWorst.mockReturnValue(null);
    parseIsBetterThan.mockReturnValue(null);
    parseIsNotDirectlyBelowOrAbove.mockReturnValue(null);
    expect(validatorsFromKnowledgeStatements()).toEqual([expected]);
  });
});
