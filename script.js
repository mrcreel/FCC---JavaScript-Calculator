$(document).ready(function() {
  var display1String = "";
  var display2String = "";
  var numCurrent = 0;
  var plusMinus = 1;

  function setDisplay(display, arg) {
    /* body... */
    document.getElementById(display).innerHTML = arg;
  }

  function concatString(elementValue) {
    /* body... */
    display1String = display1String.concat(elementValue);
    // numCurrent = parseFloat(display1String) * plusMinus;
  }

  $(".key").click(function(e) {
    var elementClass = e.target.className; // get the classname of the element clicked
    var elementValue = e.target.value;
    var elementId = e.target.id;
    var arrClasses = elementClass.split(" ");
    var clicked = arrClasses[1];

    if (elementId === "keyPoint") {
      if (display1String.indexOf(".") === -1) {
        concatString(elementValue);
        setDisplay("display1", display1String);
      }
    }

    if (elementId === "keyClear") {
      display1String = "";
      display2String = "";
      numCurrent = 0;
      plusMinus = 1;
      setDisplay("display1", 0);
      setDisplay("display2", 0);
    }

    if (elementId === "keyBack") {
      display1String = display1String.slice(0, -1);
      setDisplay("display1", display1String);
    }

    if (clicked === "key-number") {
      concatString(elementValue);
      setDisplay("display1", display1String);
    }

    if (elementId === "keyNegative") {
      if (display1String[0] !== "-") {
        display1String = "-".concat(display1String);
      } else {
        display1String = display1String.slice(1);
      }
      setDisplay("display1", display1String);
    }

    if (clicked === "key-operation") {
      if(display1String.length >0){
        display2String = display2String + " " + display1String + " " + elementValue;
        setDisplay("display2", display2String);
        display1String = "";
      }
    }
    if (elementId === "keyEqual") {
        var answer = eval(display2String.slice(0, -2));
        setDisplay("display2", display2String + " " + answer);
        display2String = "";
        setDisplay("display1", answer);
    }

  });

});