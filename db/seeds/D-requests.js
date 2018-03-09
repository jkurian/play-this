const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("requests").insert({
    id,
    title: faker.lorem.words(),
    explanation: faker.lorem.sentence(),
    user_admin_id: faker.random.number({
      min: 1,
      max: 1000
    })
  });
};

exports.seed = (knex, Promise) => {
  return knex("requests").then(() => {
    let records = [];

    for (let i = 1; i <= 50; i++) {
      records.push(createRecord(knex, i));
    }

    return Promise.all(records);
  });
};
