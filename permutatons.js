// Obtained from https://lowrey.me/permutation-with-an-es6-javascript-generator-2/
const permutations = function*(elements) {
  if (elements.length === 1) {
    yield elements;
  } else {
    let [first, ...rest] = elements;
    for (let perm of permutations(rest)) {
      for (let i = 0; i < elements.length; i++) {
        let start = perm.slice(0, i);
        let rest = perm.slice(i);
        yield [...start, first, ...rest];
      }
    }
  }
};

module.exports = {
  permutations,
};
