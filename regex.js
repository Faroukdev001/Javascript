var regex = /Hello/
var str1 = "Hello and Welcome to youtube channel. Say Hello if you are new here"

//exec()

// var output = regex.exec(str1);
// console.log(output);
// output = regex.exec(str1);
// console.log(output);

//test()

// var output = regex.test(str1);
// console.log(output);

//match()

// var output = str1.match(regex);
// console.log(output);

//replace()
var output = str1.replace(regex, "Hi");
console.log(output);