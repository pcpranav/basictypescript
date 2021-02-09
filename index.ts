//program-1
var n = 2021;
function leapyear(num: number) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) return true;
  else return false;
}
var answer: boolean;
answer = leapyear(n);
if (answer) console.log("leap year");
else console.log("not a leap year");
//program-2
let str = "guvi";
function reverse(x: string) {
  let str1 = "";
  for (let i = x.length - 1; i >= 0; i--) {
    str1 += x.charAt(i);
  }
  return str1;
}
let revstring: string;
revstring = reverse(str);
console.log(revstring);
