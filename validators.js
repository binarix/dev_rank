const { first } = require('lodash');

const notBest = (developer, ranking) => first(ranking) !== developer;

module.exports = {
  notBest,
};
