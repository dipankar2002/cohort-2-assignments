/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

let sum = 0;
function wait(n) {
    return new Promise((resolv) => {
        sum = 100 + n;
        console.log(sum);
        setTimeout(()=> {
            resolv(n);
        }, n*1000);
    })
}
function display(n) {
    console.log(`this text is logged after ${n} seconds`);
}
wait(5).then(display);
wait(10).then(display);

module.exports = wait;
