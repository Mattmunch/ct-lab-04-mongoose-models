const Car = require('../lib/models/Car');

describe('Car Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const car = new Car({
        horsepower: 600
      });
      const { errors } = car.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });
})
;
