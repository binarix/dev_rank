const { first, last } = require('lodash');

const notBest = (developer, ranking) => first(ranking) !== developer;

const notWorst = (developer, ranking) => last(ranking) !== developer;

const notBestOrWorst = (developer, ranking) => notBest(developer, ranking);

module.exports = {
  notBest,
  notWorst,
  notBestOrWorst,
};
