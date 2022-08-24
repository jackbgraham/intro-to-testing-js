// helloWorld function 
function helloWorld() {
    return "Hello, World!";
//    console.log("Hello, World!")
}

//exercise 0
//changing helloWorld to hello causes all the specs to fail
//changing hello to helloWorld causes all the specs to go green again
//deleting , World! causes a spec failure
//changing return to console.log causes 3 spec failures
//syntax error results in falures

//exercise 1

// function sayHello(){
//     return "Hello, is it me you're looking for?"
// }

//exercise 2

//exercise 3

function sayHello(str){
     return `Hello, ${str}!`
}
// sayHello("Jane");
// sayHello("Alex");
// sayHello("Pat");