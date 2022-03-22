const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("init", () => {
      it('It should requre Intern to have a school property', () => {
        const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
        expect(intern.getSchool()).toBe('UNC Charlotte');
      });
    });
  });