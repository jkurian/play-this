const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("songs").insert({
    id,
    artist: faker.commerce.productName(),
    title: faker.commerce.productName(),
    album: faker.commerce.productName(),
    spotifyID: "7GhIk7Il098yCjg4BQjzvb",
    time_stamp: faker.date.between("2017-07-31", "2018-03-09"),
    request_id: faker.random.number({
      min: 1,
      max: 3000
    }),
    user_id: faker.random.number({
      min: 1,
      max: 1000
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("songs").then(() => {
    let records = [];

    for (let i = 1; i <= 25000; i++) {
      records.push(createRecord(knex, i));
    }

    return Promise.all(records);
  });
};
