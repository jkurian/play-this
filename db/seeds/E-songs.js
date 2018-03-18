const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("songs").insert({
    artist: faker.commerce.productName(),
    title: faker.commerce.productName(),
    album: faker.commerce.productName(),
    spotify_id: "7GhIk7Il098yCjg4BQjzvb",
    song_time_stamp: faker.date.between("2017-07-31", "2018-03-09"),
    request_id: faker.random.number({
      min: 1,
      max: 300
    }),
    user_id: faker.random.number({
      min: 1,
      max: 100
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("songs").then(() => {
    let records = [];

    for (let i = 1; i <= 1000; i++) {
      records.push(createRecord(knex));
    }

    return Promise.all(records);
  });
};
