let regex = /Welc?ome?/;
let str1 = "Welbome to our Youtube channel. Welcome back";
let output = regex.test(str1) ;
console.log(output);

let op = regex.exec(str1);
console.log(op);