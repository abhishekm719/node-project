import { readFile } from "node:fs/promises";

async function main() {
  console.log("READ FILE DEMO");
  let filePath = "D:\\Web Programming\\day2\\1.html";
  /* let output = readFile(filePath);*/
  /*let output = await readFile(filePath);*/
  let output = await readFile(filePath, { encoding: "utf8" });
  console.log(output);
}
main();
