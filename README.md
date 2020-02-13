# Rating APP Service

A simple service for getting all unrated products for a user. He/she can rate a product that has already been purchased and delivered. APIs to get the average rating of the products and user rating for each and every product.

# Requirements

* `npm`
* `node` >= v12.14.0 (will likely work with older versions, but has never been
  tested)

# Installation

`npm install`

# Running

`npm start` will start the application at
[http://localhost:8080](http://localhost:8080) (set environment variable `PORT`
to change the port).

The service can now be called:

```
$ curl http://localhost:8080/ratings/products -- This will give us the products list that are avaiable in inventory
{"1":{"name":"Apple Mac Pro","description":"Apple laptop Macbook pro 15Inch touch Bar","average_rating":3.6},"2":{"name":"Apple Mac Air","description":"Apple laptop Macbook Air 13Inch","average_rating":0},"3":{"name":"Apple Home","description":"Apple Home with 1TB SDD","average_rating":0}}

$ curl http://localhost:8080/ratings/true -H "user_id:1" -- This will get all products that are already rated by user_id:1
[{"user_id":1,"product_id":1,"rating":3,"name":"Apple Mac Pro","description":"Apple laptop Macbook pro 15Inch touch Bar","average_rating":3.6}]

$ curl http://localhost:8080/ratings/false -H "user_id:1" -- This will get all products that are delivered but not rated by user_id:1
[{"user_id":1,"product_id":2,"rating":0,"name":"Apple Mac Air","description":"Apple laptop Macbook Air 13Inch","average_rating":0},{"user_id":1,"product_id":3,"rating":0,"name":"Apple Home","description":"Apple Home with 1TB SDD","average_rating":0}]%
```

# Testing

Tests can be run with `npm test`.

All tests are colocated with their respective source files in `*.spec.js` files,
using [Jest](https://facebook.github.io/jest/) with default settings.

You do not need to run the application separately to run any tests.

