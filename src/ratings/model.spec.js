jest.mock("./database");
const db = require("./database");
const getProductsByRatingMock = jest.fn();

db.mockImplementation(() => ({
  getProductsByRating: async (...args) => getProductsByRatingMock(...args)
}));

const { getProductsByRating } = require("./model");

describe("Ratings model", () => {
  describe("Get by rating status and userId", () => {
    it("Should return 0 when the user does not exist", async () => {
      getProductsByRatingMock.mockReturnValueOnce(
        new Promise(resolve => resolve(undefined))
      );
      expect(await getProductsByRating("false",0)).toBe(0);
    });
    
    it("Should return 0 when the user does not exist", async () => {
      getProductsByRatingMock.mockReturnValueOnce(
        new Promise(resolve => resolve([{user_id:1, product_id: 1, rating: 2, average_rating: 2},
          {user_id:1, product_id: 2, rating: 2, average_rating: 2}]))
      );
      const results = await getProductsByRating("true",1);
      console.log('>>>>>>>>>>>..resiults', results)
      expect(results.length).toBeGreaterThan(0);
    });
  });

});
