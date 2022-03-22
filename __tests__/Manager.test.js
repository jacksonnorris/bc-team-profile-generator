const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("init", () => {
      it('it should return the ', () => {
        const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);
        expect("name" in manager).toBe(true)
        expect("id" in manager).toBe(true)
        expect("email" in manager).toBe(true)
      });
    });
    describe("getName", () => {
      it('should return the name', () => {
        const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);
        expect(manager.getName()).toBe('Jack');
      });
    });
    describe("getId", () => {
        it('should return the id', () => {
        const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);
        expect(manager.getId()).toBe(4);
        });
      });
    describe("getEmail", () => {
        it('should return the email', () => {
        const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);
        expect(manager.getEmail()).toBe('jack@gmail.com');
        });
      });
    describe("getOfficeNumber", () => {
        it('should return the office number', () => {
        const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);
        expect(manager.getOfficeNumber()).toBe(1);
        });
      });
  });