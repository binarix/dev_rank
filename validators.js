const { first, last, findIndex } = require('lodash');

const matching = developer => match => match === developer;

const isNotTheBest = developer => ranking => first(ranking) !== developer;

const isNotTheWorst = developer => ranking => last(ranking) !== developer;

const isNotTheBestOrTheWorst = developer => ranking =>
  isNotTheBest(developer)(ranking) && isNotTheWorst(developer)(ranking);

const isBetterThan = (developer, otherDeveloper) => ranking =>
  findIndex(ranking, matching(developer)) <
  findIndex(ranking, matching(otherDeveloper));

const isDirectlyBelow = (developer, otherDeveloper) => ranking =>
  findIndex(ranking, matching(developer)) ===
  findIndex(ranking, matching(otherDeveloper)) - 1;

const isDirectlyAbove = (developer, otherDeveloper) => ranking =>
  findIndex(ranking, matching(developer)) ===
  findIndex(ranking, matching(otherDeveloper)) + 1;

const isNotDirectlyBelowOrAbove = (developer, otherDeveloper) => ranking =>
  !(
    isDirectlyBelow(developer, otherDeveloper)(ranking) ||
    isDirectlyAbove(developer, otherDeveloper)(ranking)
  );

module.exports = {
  isNotTheBest,
  isNotTheWorst,
  isNotTheBestOrTheWorst,
  isBetterThan,
  isNotDirectlyBelowOrAbove,
};
