import { createConnection } from "mysql";

function main() {
  console.log("MYSQL DEMO");

  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "ab1hi9shek",
    database: "cdac",
  };
  let connection = createConnection(connectionUri);

  connection.connect();

  console.log("Connection Done !");
  connection.end();
}
