/*
  ## File cleaner
    Read a file, remove all the extra spaces and write it back to the same file.

    For example, if the file input was
    ```
    hello     world    my    name   is       raman
    ```

    After the program runs, the output should be

    ```
    hello world my name is raman
*/
const fs = require('fs');
const { resolve } = require('path');

const data = "hello     world    my    name   is    Gohan             eeeeeeeee                eeeeeeeeeeeeee             aaaaaaaaaaaa       gggggggggg         ";

function readfileFnc() {
  fs.readFile('./medium/a.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  });
}

async function writeFileFnc(data) {
  const dataToWrite = data.replace(/\s+/g, ' ').trim();
  await fs.writeFile('./medium/a.txt', dataToWrite, (err) => {
    if (err) throw err;
  })
  console.log(`data has been written`);
  readfileFnc();
  console.log(`data has been read`);
  
}

writeFileFnc(data);
// readfileFnc();

