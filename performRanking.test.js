const { performRanking } = require('./performRanking');
const { isNotTheWorst } = require('./validators');
const {
  validatorsFromKnowledgeStatements,
} = require('./validatorsFromKnowledgeStatements');

jest.mock('./validatorsFromKnowledgeStatements');

describe('performRanking', () => {
  afterEach(() => jest.resetAllMocks());

  describe('performRanking', () => {
    it('should return ranking that passes all validators', () => {
      validatorsFromKnowledgeStatements.mockReturnValueOnce([
        isNotTheWorst('Evan'),
      ]);
      const developers = ['Jessie', 'Evan', 'John', 'Sarah', 'Matt'];
      const ranking = performRanking(developers);
      expect(ranking).toEqual(developers);
    });
  });
});
