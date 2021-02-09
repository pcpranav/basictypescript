//program-1

var n = 2021;
function leapyear(num: number): boolean {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) return true;
  else return false;
}
if (leapyear(n)) console.log("leap year");
else console.log("not a leap year");

//program-2
let str = "guvi";
function reverse(x: string): string {
  let str1 = "";
  for (let i = x.length - 1; i >= 0; i--) {
    str1 += x.charAt(i);
  }
  return str1;
}
console.log(reverse(str));
