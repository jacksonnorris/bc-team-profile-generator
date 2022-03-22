const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("init", () => {
      it('it should return the ', () => {
        const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
        expect("name" in intern).toBe(true)
        expect("id" in intern).toBe(true)
        expect("email" in intern).toBe(true)
      });
    });
    describe("getName", () => {
      it('should return the name', () => {
        const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
        expect(intern.getName()).toBe('Jacob');
      });
    });
    describe("getId", () => {
        it('should return the id', () => {
        const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
        expect(intern.getId()).toBe(2);
        });
      });
    describe("getEmail", () => {
        it('should return the email', () => {
        const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
        expect(intern.getEmail()).toBe('jacob@gmail.com');
        });
      });
      describe("getSchool", () => {
        it('should return the school', () => {
        const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
        expect(intern.getSchool()).toBe('UNC Charlotte');
        });
      });
  });