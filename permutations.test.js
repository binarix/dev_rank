const { permutations } = require('./permutatons');

describe('permutations', () => {
  it('should generate the correct permutations', () => {
    expect(Array.from(permutations([1, 2, 3]))).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [2, 3, 1],
      [1, 3, 2],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
