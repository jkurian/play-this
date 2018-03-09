exports.up = function(knex, Promise) {
  return Promise.all([
    // create user table
    knex.schema.createTable("users", function(table) {
      table.increments("id");
      table.string("first_name");
      table.string("last_name");
      table.string("avatar_image");
      table.string("email");
      table.string("password");
    }),

    // requests table
    knex.schema.createTable("requests", function(table) {
      table.increments("id");
      table.string("name");
      table.string("reason");
      table.integer("user_admin_id").unsigned();
      table.foreign("user_admin_id").references("users.id");
    }),

    // songs table
    knex.schema.createTable("songs", function(table) {
      table.increments("id");
      table.string("artist");
      table.string("title");
      table.string("album");
      table.string("spotifyID");
      table.integer("request_id").unsigned();
      table.foreign("request_id").references("requests.id");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
    }),

    // Comments table
    knex.schema.createTable("comments", function(table) {
      table.increments("id");
      table.string("comment");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("song_id").unsigned();
      table.foreign("song_id").references("songs.id");
    }),

    // User_song table
    knex.schema.createTable("user_song", function(table) {
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("song_id").unsigned();
      table.foreign("song_id").references("songs.id");
    }),

    // User likes table
    knex.schema.createTable("userlikes", function(table) {
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("song_id").unsigned();
      table.foreign("song_id").references("songs.id");
    }),

    // User Friends tableName
    knex.schema.createTable("userfriends", function(table) {
      table.integer("user_id1").unsigned();
      table.foreign("user_id1").references("users.id");
      table.integer("user_id2").unsigned();
      table.foreign("user_id2").references("users.id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("userFriends"),
    knex.schema.dropTable("userLikes"),
    knex.schema.dropTable("user_song"),
    knex.schema.dropTable("comments"),
    knex.schema.dropTable("songs"),
    knex.schema.dropTable("requests"),
    knex.schema.dropTable("users")
  ]);
};
