const Gift = require('../lib/models/Gift');

describe('Gift', () => {
  describe('weight', () => {
    it('requires a weight', () => {
      const gift = new Gift({
        price:2000
      });
      const { errors } = gift.validateSync();
      expect(errors.weight.message).toEqual('Path `weight` is required.');
    });  
  });
  describe('price', () => {
    it('requires a price', () => {
      const gift = new Gift({
        weight: 100
      });
      const { errors } = gift.validateSync();
      expect(errors.price.message).toEqual('Path `price` is required.');
    });
  });
})
;
