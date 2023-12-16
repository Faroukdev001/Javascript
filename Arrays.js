// var car1 = "Bmw";
// var car2 = "Honda";
// var car3 = "Benz";

// document.write("<h1>" + car1 + "</h1>");
// document.write("<h1>" + car2 + "</h1>");
// document.write("<h1>" + car3 + "</h1>");

var cars = ['Bmw', 'Benz', 'Honda', 'Pagani', 'Koenisgegg'];
cars.push("Nissan");
cars.pop();
cars.sort();
cars.push(20)
for(var i = 0; i<cars.length; i++) {
    document.write("<h1>" + cars[i] + "</h1>");
}

// document.write("<br>")

// var fruits = new Array("Apple", "Banana", "Mango");
// for(var i = 0; i<3; i++) {
//     document.write("<h1>" + fruits[i] + "</h1>");
// }

