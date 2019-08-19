const { flatMap, reject, isNull } = require('lodash');
const {
  isNotTheBest,
  isNotTheWorst,
  isNotTheBestOrTheWorst,
  isBetterThan,
  isNotDirectlyBelowOrAbove,
} = require('./validators');
const {
  parseIsNotTheBest,
  parseIsNotTheWorst,
  parseIsNotTheBestOrTheWorst,
  parseIsBetterThan,
  parseIsNotDirectlyBelowOrAbove,
} = require('./parsers');
const { knowledgeStatements } = require('./knowledgeStatements');

const parsers = [
  parseIsNotTheBest,
  parseIsNotTheWorst,
  parseIsNotTheBestOrTheWorst,
  parseIsBetterThan,
  parseIsNotDirectlyBelowOrAbove,
];

const validatorsFromKnowledgeStatements = () =>
  reject(
    flatMap(
      knowledgeStatements().map(knowledgeStatement =>
        parsers.map(parse => parse(knowledgeStatement)),
      ),
    ),
    isNull,
  );

module.exports = {
  validatorsFromKnowledgeStatements,
};
