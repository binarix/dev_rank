const {
  isNotTheBest,
  isNotTheWorst,
  isNotTheBestOrTheWorst,
  isBetterThan,
  isNotDirectlyBelowOrAbove,
} = require('./validators');

const validatorsFromKnowledgeStatements = () => [
  isNotTheBest('Jessie'),
  isNotTheWorst('Evan'),
  isNotTheBestOrTheWorst('John'),
  isBetterThan('Sarah', 'Evan'),
  isNotDirectlyBelowOrAbove('Matt', 'John'),
  isNotDirectlyBelowOrAbove('John', 'Evan'),
];

module.exports = {
  validatorsFromKnowledgeStatements,
};
