const { getBool } = require('./helpers')
module.exports = (persistence = {
  users:{
    1: {
      first_name: "manas",
      last_name: "mishra",
      created_at: new Date(),
      is_active: true
    },
    2: {
      first_name: "rakesh",
      last_name: "sahoo",
      created_at: new Date(),
      is_active: true
    },
    3: {
      first_name: "soumya",
      last_name: "panda",
      created_at: new Date(),
      is_active: true
    }
  },
  products:{
    1: {
      name: "Apple Mac Pro",
      description: "Apple laptop Macbook pro 15Inch touch Bar",
      average_rating: 3.6
    },
    2: {
      name: "Apple Mac Air",
      description: "Apple laptop Macbook Air 13Inch",
      average_rating: 0
    },
    3: {
      name: "Apple Home",
      description: "Apple Home with 1TB SDD",
      average_rating: 0
    }
  },
  ratings:{
    1: {
      user_id: 1,
      product_id:1,
      rating:3
    },
    2: {
      user_id: 2,
      product_id:1,
      rating:4
    },
    3: {
      user_id: 3,
      product_id:1,
      rating:4
    },
    4: {
      user_id: 1,
      product_id:2,
      rating:0
    },
    5: {
      user_id: 1,
      product_id:3,
      rating:0
    }
  }
}) => {
  const getProductsByRating = async (rateStatus, userID) => 
    new Promise(resolve => {
      const productsByRateStatus = Object.values(persistence.ratings).filter(rating =>
        rating.user_id == userID && !!rating.rating == getBool(rateStatus));
      return resolve(productsByRateStatus.map(product => {
        return { 
          ...product,
          ...persistence.products[product.product_id]
        }
      }));
    });
  const getAllPrpducts = async () => {
    return new Promise(resolve => resolve(persistence.products));
  }
  return {
    getProductsByRating,
    getAllPrpducts
  };
};
