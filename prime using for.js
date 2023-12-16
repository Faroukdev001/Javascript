// program to check if a number is prime or not
//using for loop

// for(var prime = 1; prime%1 == 1; prime++) {
//     document.write("<h1>" + prime 
//                             + " is a prime number" 
//                             + "</h1>")
    
// }

var number = 83;
var isPrime = true;

// check if number is equal to 1
if (number === 1) {
    document.write("1 is neither prime nor composite")
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number -1
    for (var i = 2; i < number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime == true) {
        document.write(number + "\nis a prime number");
    }
    else {
        document.write(number + "\nis not a prime number");
    }
}

// to check if number is less than 1
else {
    document.write("the number is not a prime number");
}


