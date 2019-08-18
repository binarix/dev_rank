const { first, last, findIndex } = require('lodash');

const matching = developer => match => match === developer;

const notBest = (developer, ranking) => first(ranking) !== developer;

const notWorst = (developer, ranking) => last(ranking) !== developer;

const notBestOrWorst = (developer, ranking) =>
  notBest(developer, ranking) && notWorst(developer, ranking);

const betterThan = (developer, otherDeveloper, ranking) =>
  findIndex(ranking, matching(developer)) <
  findIndex(ranking, matching(otherDeveloper));

module.exports = {
  notBest,
  notWorst,
  notBestOrWorst,
  betterThan,
};
