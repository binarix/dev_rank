const { first, last } = require('lodash');

const notBest = (developer, ranking) => first(ranking) !== developer;

const notWorst = (developer, ranking) => last(ranking) !== developer;

module.exports = {
  notBest,
  notWorst,
};
