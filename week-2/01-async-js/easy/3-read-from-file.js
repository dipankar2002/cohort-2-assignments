/*
    ## Reading the contents of a file
      Write code to read contents of a file and print it to the console. 
      You can use the fs library to as a black box, the goal is to understand async tasks. 
      Try to do an expensive operation below the file read and see how it affects the output. 
      Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require('fs');
const { resolve } = require('path');


async function readfileFnc() {
  const read = await fs.readFileSync('./easy/a.txt', 'utf-8');
  console.log(read);
  console.log(`data has been read`);
}
readfileFnc();