let displayOneString = '';
let displayTwoString = '';
let numCurrent = 0;

function setDisplay(display, arg) {
    /* body... */
    document.getElementById(display).innerHTML = arg;
}


$(document).ready(function() {
    $(document).click(function(e) {
        const elementClassName = e.target.className; // get the classname of the element clicked
        const elementValue = e.target.value;
        const elementId = e.target.id;
        const arrClassNames = elementClassName.split(' ');
        
        let clicked = arrClassNames[4];
        if (clicked === 'key-number') {

        }
        if (elementId === 'keyClear') {

        }
        if (elementId === 'keyBack') {

        }
        if (clicked === 'key-operation') {

        }
    });
});