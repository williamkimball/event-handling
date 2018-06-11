/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

let toggleFlight = () => {
    let target = document.querySelector('#flight');
    target.classList.toggle('disabled');
    target.classList.toggle('enabled');
}
document.querySelector("#activate-flight").addEventListener("click", toggleFlight)



/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
let toggleMindreading = () => {
    let targ1 = document.querySelector('#mindreading');
    targ1.classList.toggle('disabled');
    targ1.classList.toggle('enabled');
}
document.querySelector("#activate-mindreading").addEventListener("click", toggleMindreading)

let toggleXray = () => {
    let targ1 = document.querySelector('#xray');
    targ1.classList.toggle('disabled');
    targ1.classList.toggle('enabled');
}
document.querySelector("#activate-xray").addEventListener("click", toggleXray)

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

let toggleAllOn = () => {
    let target = document.querySelectorAll('.power');
    for (var i = 0; i < target.length; i++) {
        var item = target[i]; 
        item.classList.remove('disabled');
        item.classList.add('enabled');
      }
    
}
document.querySelector("#activate-all").addEventListener("click", toggleAllOn)

let toggleAllOff = () => {
    let target = document.querySelectorAll('.power');
    for (var i = 0; i < target.length; i++) {
        var item = target[i]; 
        item.classList.add('disabled');
        item.classList.remove('enabled');
      }
    
}
document.querySelector("#deactivate-all").addEventListener("click", toggleAllOff)