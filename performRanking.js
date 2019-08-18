const { every, first } = require('lodash');
const { permutations } = require('./permutatons');
const {
  validatorsFromKnowledgeStatements,
} = require('./validatorsFromKnowledgeStatements');

const isTruthy = validation => !!validation;

const validateRanking = ranking => {
  const validations = validatorsFromKnowledgeStatements().map(validate =>
    validate(ranking),
  );
  return every(validations, isTruthy);
};

const performRanking = developers =>
  first(Array.from(permutations(developers)).filter(validateRanking));

module.exports = {
  performRanking,
};
