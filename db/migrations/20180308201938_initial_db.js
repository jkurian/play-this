exports.up = (knex, Promise) => {
  return Promise.all([
    // create user table
    knex.schema.createTable("users", table => {
      table.increments("id");
      table.string("first_name");
      table.string("last_name");
      table.string("avatar_image");
      table.string("email");
      table.string("password");
    }),

    // requests table
    knex.schema.createTable("requests", table => {
      table.increments("id");
      table.string("title");
      table.string("explanation", 500);
      table.timestamp("request_time_stamp").defaultTo(knex.fn.now());
      table.integer("user_admin_id").unsigned();
      table.foreign("user_admin_id").references("users.id");
    }),

    // songs table
    knex.schema.createTable("songs", table => {
      table.increments("id");
      table.string("artist");
      table.string("title");
      table.string("album");
      table.string("spotify_id");
      table.timestamp("song_time_stamp").defaultTo(knex.fn.now());
      table.integer("request_id").unsigned();
      table.foreign("request_id").references("requests.id");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
    }),

    // Comments table
    knex.schema.createTable("comments", table => {
      table.increments("id");
      table.string("comment", 500);
      table.timestamp("comment_time_stamp").defaultTo(knex.fn.now());
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("song_id").unsigned();
      table.foreign("song_id").references("songs.id");
    }),

    // User_song table
    knex.schema.createTable("user_song", table => {
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("song_id").unsigned();
      table.foreign("song_id").references("songs.id");
    }),

    // User likes table
    knex.schema.createTable("userlikes", table => {
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("song_id").unsigned();
      table.foreign("song_id").references("songs.id");
    }),

    // User Friends tableName
    knex.schema.createTable("userfriends", table => {
      table.integer("user_id1").unsigned();
      table.foreign("user_id1").references("users.id");
      table.integer("user_id2").unsigned();
      table.foreign("user_id2").references("users.id");
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable("userfriends"),
    knex.schema.dropTable("userlikes"),
    knex.schema.dropTable("user_song"),
    knex.schema.dropTable("comments"),
    knex.schema.dropTable("songs"),
    knex.schema.dropTable("requests"),
    knex.schema.dropTable("users")
  ]);
};
