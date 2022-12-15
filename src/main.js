import { createConnection } from "mysql";

function main() {
  console.log("MYSQL DEMO");

  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "ab1hi9shek",
    database: "cdac",
  };

  // preparting the connection with details
  let connection = createConnection(connectionUri);

  // opening the connection
  connection.connect();

  console.log("Connection DONE!");

  // close the connection
  connection.end();
}

main();
