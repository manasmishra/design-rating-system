const createDatabase = require("./database");

describe("Rating database", () => {
  describe("Find All products for the logged in user to which ratings are not given", () => {
    const db = createDatabase();

    it("Should return 0 no of records if the user does not exist", async () => {
      const results = await db.getProductsByRating("false",6);
      expect(results.length).toBe(0);
    });

    it("Should return records if the user exist and have rated products", async () => {
      const results = await db.getProductsByRating("true",1);
      expect(results.length).toBeGreaterThan(0);
    });

    it("Should return all non rated products for the logged in user", async () => {
      const results = await db.getProductsByRating("false",1);
      expect(results.length).toBeGreaterThan(0);
    });
  });
});
