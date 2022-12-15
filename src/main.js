import { createConnection } from "mysql";

function main() {
  console.log("MYSQL QUERY DEMO");

  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "cdac",
  };

  let connection = createConnection(connectionUri);
  connection.connect();

  let sql = `INSERT INTO message (message, reply) VALUES ('Hello Html', 3)`;
  connection.query(sql);

  connection.end();
}

main();
