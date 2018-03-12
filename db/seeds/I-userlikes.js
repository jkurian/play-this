const faker = require("faker");

let createRecord = (knex) => {
  return knex("userlikes").insert({
    user_id: faker.random.number({
      min: 1,
      max: 1000
    }),
    song_id: faker.random.number({
      min: 1,
      max: 1000
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("userlikes").then(() => {
    let records = [];

    for (let i = 1; i <= 10000; i++) {
      records.push(createRecord(knex));
    }

    return Promise.all(records);
  });
};
