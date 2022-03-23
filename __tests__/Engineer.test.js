const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getGitHub", () => {
      it('it should require an Engineer to have a Github Username ', () => {
        const engineer = new Engineer('Jim', 1, 'j@gmail.com', 'jj123');
        expect(engineer.getGitHub()).toBe('jj123');
      });
    });
  });