const num = require("../index.js");

describe("fnums.js", () => {
    it("should create a number equal to the # of times it is invoked (from 0)", () => {
        expect(+num()).toBe(0);

        expect(+num()()()).toBe(2);

        expect(+num()()()()()()()()()()()()()()()()()()()()()()()()).toBe(23);

        // seems good (◕‿◕✿)
    });
});
