const { first } = require('lodash');

const notBest = (developer, ranking) => first(ranking) !== developer;

const notWorst = (developer, ranking) => true;

module.exports = {
  notBest,
  notWorst,
};
