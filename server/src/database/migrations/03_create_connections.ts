import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    // wrote when the user connect with the teacher
    // make a faq about the current_time nottin' be consider as a func.
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP")).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
