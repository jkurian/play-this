const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("songs").insert({
    id,
    artist: faker.commerce.productName(),
    title: faker.commerce.productName(),
    album: faker.commerce.productName(),
    spotifyID: "d3213nkjd79e8",
    request_id: faker.random.number({
      min: 1,
      max: 10
    }),
    user_id: faker.random.number({
      min: 1,
      max: 10
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("songs").then(() => {
    let records = [];

    for (let i = 1; i <= 1000; i++) {
      records.push(createRecord(knex, i));
    }

    return Promise.all(records);
  });
};
