
/*
    ## Counter without setInterval
      Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

let n = 1;
function counter() {
  console.clear();
  console.log(n);
  n++;
  console.log(`\n`);  
  setTimeout(counter,1*1000);
}

counter();


































































// (Hint: setTimeout)