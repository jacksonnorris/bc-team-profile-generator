const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("init", () => {
      it('it should return the ', () => {
        const employee = new Employee('James', 2, 'james@gmail.com');
        expect("name" in employee).toBe(true)
        expect("id" in employee).toBe(true)
        expect("email" in employee).toBe(true)
      });
    });
    describe("getName", () => {
      it('should return the name', () => {
        const employee = new Employee('James', 2, 'james@gmail.com');
        expect(employee.getName()).toBe('James');
      });
    });
    describe("getId", () => {
        it('should return the id', () => {
        const employee = new Employee('James', 2, 'james@gmail.com');
        expect(employee.getId()).toBe(1);
        });
      });
      describe("getEmail", () => {
        it('should return the email', () => {
        const employee = new Employee('James', 2, 'james@gmail.com');
        expect(employee.getEmail()).toBe('james@gmail.com');
        });
      });
  });