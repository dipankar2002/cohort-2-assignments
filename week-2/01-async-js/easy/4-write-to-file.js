/*
    ## Write to a file
      Using the fs library again, try to write to the contents of a file.
      You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

let data = "GoHANN15 GoHANN15 GoHANN15 GoHANN15 GoHANN15 GoHANN15 aefasdddddddddddddddddddddddddddewqfasef aefasdddddddddddddddddddddddddddewqfasef aefasdddddddddddddddddddddddddddewqfasef";

async function writeFileFnc() {
  await fs.writeFile('./easy/a.txt', data, (err) => {
    if (err) throw err;
  })
  console.log(`data has been written`);
}
writeFileFnc();