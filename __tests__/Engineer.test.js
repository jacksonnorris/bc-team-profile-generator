const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("init", () => {
      it('it should return the ', () => {
        const engineer = new Engineer('Jim', 1, 'j@gmail.com');
        expect("name" in engineer).toBe(true)
        expect("id" in engineer).toBe(true)
        expect("email" in engineer).toBe(true)
      });
    });
    describe("getName", () => {
      it('should return the name', () => {
        const engineer = new Engineer('Jim', 1, 'j@gmail.com');
        expect(engineer.getName()).toBe('Jim');
      });
    });
    describe("getId", () => {
        it('should return the id', () => {
        const engineer = new Engineer('Jim', 1, 'j@gmail.com');
        expect(engineer.getId()).toBe(1);
        });
      });
      describe("getEmail", () => {
        it('should return the email', () => {
        const engineer = new Engineer('Jim', 1, 'j@gmail.com');
        expect(engineer.getEmail()).toBe('j@gmail.com');
        });
      });
  });