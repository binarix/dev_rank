const { nth } = require('lodash');
const { isNotTheBest } = require('./validators');

const isNotTheBestRegex = /^(.*) is not the best developer$/;

const parseIsNotTheBest = knowledgeStatement => {
  const matches = isNotTheBestRegex.exec(knowledgeStatement);
  return matches && isNotTheBest(nth(matches, 1));
};

module.exports = {
  parseIsNotTheBest,
};
