const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("comments").insert({
    comment: faker.lorem.sentences(),
    time_stamp: faker.date.between("2017-07-31", "2018-03-09"),
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
  return knex("comments").then(() => {
    let records = [];

    for (let i = 1; i <= 2500; i++) {
      records.push(createRecord(knex));
    }

    return Promise.all(records);
  });
};
