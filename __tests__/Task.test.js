const Task = require('../lib/models/Task');

describe('Task', () => {
  describe('title', () => {
    it('requires a title', () => {
      const task = new Task({
        difficulty: 4
      });
      const { errors } = task.validateSync();
      expect(errors.title.message).toEqual('Path `title` is required.');
    });
  });
  describe('difficulty', () => {
    it('requires a difficulty', () => {
      const task = new Task({
        title:'Take out the trash'
      });
      const { errors } = task.validateSync();
      expect(errors.difficulty.message).toEqual('Path `difficulty` is required.');
    });
    it('requires difficulty from 1 to 10', () => {
      const task = new Task({
        title: 'Take out the trash',
        difficulty:12
      });
      const { errors } = task.validateSync();
      expect(errors.difficulty.message).toEqual('Path `difficulty` (12) is more than maximum allowed value (10).');
    });
    it('requires difficulty from 1 to 10', () => {
      const task = new Task({
        title: 'Take out the trash',
        difficulty:-3
      });
      const { errors } = task.validateSync();
      expect(errors.difficulty.message).toEqual('Path `difficulty` (-3) is less than minimum allowed value (1).');
    });
  });  
});
