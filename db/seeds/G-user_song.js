const faker = require("faker");

let createRecord = knex => {
  return knex("user_song").insert({
    user_id: faker.random.number({
      min: 1,
      max: 1000
    }),
    song_id: faker.random.number({
      min: 1,
      max: 25000
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("user_song").then(() => {
    let records = [];

    for (let i = 1; i <= 200; i++) {
      records.push(createRecord(knex));
    }

    return Promise.all(records);
  });
};
