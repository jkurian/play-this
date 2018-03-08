exports.up = function(knex, Promise) {
  return Promise.all([
    // create user table
    knex.schema.createTable("users", function(table) {
      table.increments();
      table.string("first_name");
      table.string("last_name");
      table.string("email");
      table.string("image");
      // foreign key Request_ID
    }),
    // requests user table
    knex.schema.createTable("requests", function(table) {
      table.increments();
      table.string("name");
      table.string("reason");
      //foreign key user
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("users"),
    knex.schema.dropTable("requests")
  ]);
};
