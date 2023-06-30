//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function invokeCallBack(callback) {
    setTimeout(callback, 2000); //2000ms=2sec
}

function displayDelay() {
    console.log('Hello there,Welcome to our site!')
}

invokeCallBack(displayDelay) //output:Hello there,Welcome to our site!