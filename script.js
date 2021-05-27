'use strict';

var box = document.getElementById('display');

function addtoscreen(x) {
  box.value += x;
  if (x == 'C') {
    box.value = '';
  }
}

function answer() {
  let x = box.value;
  let y = eval(x);
  box.value = y;
}

function backspace() {
  const number = box.value;
  const len = number.length - 1;
  const newNumber = number.substring(0, len);
  box.value = newNumber;
}

function power(y) {
  let x = box.value;
  box.value = '';
  x = Math.pow(x, y);
  box.value = x;
}

$(document).keypress(function (e) {
  var key = e.which;
  switch (key) {
    case 48:
      addtoscreen('0');
      break;

    case 49:
      addtoscreen('1');
      break;

    case 50:
      addtoscreen('2');
      break;

    case 51:
      addtoscreen('3');
      break;

    case 52:
      addtoscreen('4');
      break;

    case 53:
      addtoscreen('5');
      break;

    case 54:
      addtoscreen('6');
      break;

    case 55:
      addtoscreen('7');
      break;

    case 56:
      addtoscreen('8');
      break;

    case 57:
      addtoscreen('9');
      break;

    case 67:
      addtoscreen('C');
      break;

    case 66:
      backspace();
      break;

    case 65:
      addtoscreen('+');
      break;

    case 83:
      addtoscreen('-');
      break;

    case 77:
      addtoscreen('*');
      break;

    case 68:
      addtoscreen('/');
      break;

    case 46:
      addtoscreen('.');
      break;

    case 69:
      answer();
      break;

    default:
      alert('invalid');
  }
});
