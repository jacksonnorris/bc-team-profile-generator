const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("init", () => {
      it('it should require an Engineer to have a Github Username ', () => {
        const engineer = new Engineer('Jim', 1, 'j@gmail.com', 'jj123');
        expect("gitHub" in engineer).toBe(true);
      });
    });
  });