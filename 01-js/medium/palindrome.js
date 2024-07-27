/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
// const str = "Nan";
// function isPalindrome(str) {
//   let str2 = str.split("");
//   let str3 = str2.reverse();
//   console.log(str3);
//   let str4 = str3.join("");
//   console.log(str4.toLowerCase());
//   if(str.toLowerCase() == str4.toLowerCase()) {
//     return true;
//   }
//   return false;
// }
// // console.log(isPalindrome(str));



function transform(str) {
  var ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == "," || str[i] == "." || str[i] == "!" || str[i] == "?") { }
    else {
      ans += str[i];
    }
  }
  return ans;
}

function reverse(str) {
  var reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }
  return reverse;

}
function isPalindrome(str) {
  var answer = str.toLowerCase();
  var answer2 = transform(answer);
  var reverseString = reverse(answer2);
  if (reverseString === answer2)
    return true;
  else
    return false;
}

module.exports = isPalindrome;