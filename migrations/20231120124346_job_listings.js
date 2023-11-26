/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("job_listings", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.text("desc").notNullable();
    table.string("company").notNullable();
    table.string("location").notNullable();
    table.decimal("salary", 10, 2);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("job_listings");
};
