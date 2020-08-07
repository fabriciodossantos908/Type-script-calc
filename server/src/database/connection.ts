import Knex from "knex";
import path from "path";

// migrations -> control the database version

const db = Knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default db;
