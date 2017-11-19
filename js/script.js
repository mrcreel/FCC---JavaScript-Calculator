let displayOneString = '';
let displayTwoString = '';
let numCurrent = 0;

function setDisplay(display, arg) {
    /* body... */
    document.getElementById(display).innerHTML = arg;
}


$(document).ready(function() {
    $(document).click(function(e) {
        var elementClassName = e.target.className; // get the classname of the element clicked
        var elementValue = e.target.value;
        var elementId = e.target.id;
        var arrClassNames = elementClassName.split(' ');
        var clicked = arrClassNames[4];
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