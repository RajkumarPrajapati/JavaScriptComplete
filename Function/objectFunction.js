var add = new Function("num1","num2","return num1+num2");
console.log(add(10,23));

let power = new Function("a","b","return Math.pow(a,b)");
console.log(power(4,3));

let message =  new Function("msg","return msg");
console.log(message("Hello Raj!"));

let sub = new Function("a","b","return a-b");
console.log(sub(30,20));