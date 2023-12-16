// var prom = new Promise(function(resolve, reject){

//     var drive = false;
//     if(drive) {
//         resolve("Yes");
//     }
//     else {
//         reject("No");
//     }
// });


// prom.then(function(resolve){
//     console.log(resolve + " the user knows how to drive.")
// }).catch(function(reject) {
//     console.log(reject + " the user does not know how to drive.")
// })


var functions = function() {
    return new Promise(function(resolve, reject) {
        resolve("Learnt Functions");
    });
};

var callback = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Learnt Callback functions ");
    });
};

var promises = function(message) {
    return new Promise(function(resolve,reject){
        resolve(message + " Good to go for Promises in Javascript")
    });
};

functions().then(function(result) {
    return callback(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("good to go: " + result);
})
















































































// var prom = new Promise(function(messageHim, ghostHim) {

//     var relationship = false;
//     if(relationship) {
//         messageHim("Yes");
//     }
//     else {
//         ghostHim("No");
//     }
// });

// prom.then(function(messageHim) {
//     console.log(messageHim + " yes i will be your gf.");
// }).catch(function(ghostHim) {
//     console.log(ghostHim + " i don't want a relationship with you.");
// })