const { every } = require('lodash');
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

const performRanking = developers => validateRanking(developers) && developers;

module.exports = {
  performRanking,
};
