//Literal Object
var car = {
    car_manufacturer : "Audi",
    car_model : "Q7",
    price : 50000,

    allwheeldrive : function() {
        document.write("This car comes with Quattro all-wheel drive")  
    }
}

car.allwheeldrive();
// 150 lines
car.car_color = "Black";
// delete car.car_model;

document.write("<h1>" + car.car_model + "</h1>");

car.price = "70000";
document.write("<h1>" + car.price + "</h1>");
document.write("<h1>" + typeof(car.price) + "</h1>");

































// Constructor Function
// function cars(car_manufacturer, car_model, price) {

//     this.car_manufacturer = car_manufacturer;
//     this.car_model = car_model;
//     this.price = price;
    
//     this.allwheelDrive = function() {
//         document.write("<h2>" + "This car comes with Quattro all-wheel drive");
//     }
// }

// var c1 = new cars("Bmw", "Q7", 50000);
// c1.allwheelDrive();

// var c2 = new cars("Bmw", "x7", 40000);
// document.write(c2.price);






