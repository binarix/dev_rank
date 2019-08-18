const { performRanking } = require('./performRanking');
const { isNotTheWorst, isNotTheBest } = require('./validators');
const {
  validatorsFromKnowledgeStatements,
} = require('./validatorsFromKnowledgeStatements');

jest.mock('./validatorsFromKnowledgeStatements');

describe('performRanking', () => {
  afterEach(() => jest.resetAllMocks());

  describe('performRanking', () => {
    it('should return first ranking that passes all validators', () => {
      validatorsFromKnowledgeStatements.mockReturnValue([
        isNotTheWorst('Evan'),
      ]);
      const developers = ['Jessie', 'Evan', 'John', 'Sarah', 'Matt'];
      const ranking = performRanking(developers);
      expect(ranking).toEqual(developers);
    });

    it('should return first ranking that passes all validators when initial list fails validation', () => {
      validatorsFromKnowledgeStatements.mockReturnValue([
        isNotTheBest('Jessie'),
      ]);
      const developers = ['Jessie', 'Evan', 'John', 'Sarah', 'Matt'];
      const expectedRanking = ['Evan', 'Jessie', 'John', 'Sarah', 'Matt'];
      const ranking = performRanking(developers);
      expect(ranking).toEqual(expectedRanking);
    });
  });
});
