const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("userlikes").insert({
    user_id1: faker.random.number({
      min: 1,
      max: 10
    }),
    user_id2: faker.random.number({
      min: 1,
      max: 10
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("userlikes").then(() => {
    let records = [];

    for (let i = 1; i <= 10; i++) {
      records.push(createRecord(knex, i));
    }

    return Promise.all(records);
  });
};
