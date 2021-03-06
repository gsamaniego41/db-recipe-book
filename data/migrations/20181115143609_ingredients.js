exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.float("quantity");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
