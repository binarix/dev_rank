const { nth } = require('lodash');
const { isNotTheBest, isNotTheWorst } = require('./validators');

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

module.exports = {
  parseIsNotTheBest,
  parseIsNotTheWorst,
};
