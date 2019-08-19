const { nth } = require('lodash');
const {
  isNotTheBest,
  isNotTheWorst,
  isNotTheBestOrTheWorst,
  isBetterThan,
  isNotDirectlyBelowOrAbove,
} = require('./validators');

const isNotTheBestRegex = /^(.*) is not the best developer$/;

const parseIsNotTheBest = knowledgeStatement => {
  const matches = isNotTheBestRegex.exec(knowledgeStatement);
  return matches && isNotTheBest(nth(matches, 1));
};

const isNotTheWorstRegex = /^(.*) is not the worst developer$/;

const parseIsNotTheWorst = knowledgeStatement => {
  const matches = isNotTheWorstRegex.exec(knowledgeStatement);
  return matches && isNotTheWorst(nth(matches, 1));
};

const isNotTheBestOrTheWorstRegex = /^(.*) is not the best developer or the worst developer$/;

const parseIsNotTheBestOrTheWorst = knowledgeStatement => {
  const matches = isNotTheBestOrTheWorstRegex.exec(knowledgeStatement);
  return matches && isNotTheBestOrTheWorst(nth(matches, 1));
};

const isBetterThanRegex = /^(.*) is a better developer than (.*)$/;

const parseIsBetterThan = knowledgeStatement => {
  const matches = isBetterThanRegex.exec(knowledgeStatement);
  return matches && isBetterThan(nth(matches, 1), nth(matches, 2));
};

const isNotDirectlyBelowOrAboveRegex = /^(.*) is not directly below or above (.*) as a developer$/;

const parseIsNotDirectlyBelowOrAbove = knowledgeStatement => {
  const matches = isNotDirectlyBelowOrAboveRegex.exec(knowledgeStatement);
  return matches && isNotDirectlyBelowOrAbove(nth(matches, 1), nth(matches, 2));
};

module.exports = {
  parseIsNotTheBest,
  parseIsNotTheWorst,
  parseIsNotTheBestOrTheWorst,
  parseIsBetterThan,
  parseIsNotDirectlyBelowOrAbove,
};
