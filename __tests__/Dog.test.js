const Dog = require('../lib/models/Dog');

describe('Dog', () => {
  describe('breed', () => {
    it('requires a breed', () => {
      const dog = new Dog({
        weight:100
      });
      const { errors } = dog.validateSync();
      expect(errors.breed.message).toEqual('Path `breed` is required.');
    });
  });
  describe('weight', () => {
    it('requires a weight', () => {
      const dog = new Dog({
        breed:'Boston Terrier'
      });
      const { errors } = dog.validateSync();
      expect(errors.weight.message).toEqual('Path `weight` is required.');
    });
  });
});
