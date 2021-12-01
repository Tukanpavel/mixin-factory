import {createFileDB} from "./dao/fileDAO.js";

const some = createFileDB({});

(async () => {
  await some.connect();
  console.log(some.model());
  console.log(await some.getAll());
})();

