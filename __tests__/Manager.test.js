const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getOfficeNumber", () => {
      it('It should require the manager to have an office number', () => {
        const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);
        expect(manager.getOfficeNumber()).toBe(1);
      });
    });

  });