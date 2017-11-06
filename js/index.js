(function() {

  let input = '';

  $('#buttons-container').click(checkButton);

  function updateScreen() {
    $('#screen').empty();
    $('#screen').append(input);
  }

  function checkButton() {
    let target = $(event.target);
    if (target.is('span')) {
      if (input !== "Error" && input !== "No negatives") {
        switch (target.text()) {
          case '0' :  input += '0';
                      updateScreen();
                      break;
          case '1' :  input += '1';
                      updateScreen();
                      break;
          case '2' :  input += '2';
                      updateScreen();
                      break;
          case '3' :  input += '3';
                      updateScreen();
                      break;
          case '4' :  input += '4';
                      updateScreen();
                      break;
          case '5' :  input += '5';
                      updateScreen();
                      break;
          case '6' :  input += '6';
                      updateScreen();
                      break;
          case '7' :  input += '7';
                      updateScreen();
                      break;
          case '8' :  input += '8';
                      updateScreen();
                      break;
          case '9' :  input += '9';
                      updateScreen();
                      break;
          case '+' :  input += '+';
                      updateScreen();
                      break;
          case '-' :  input += '-';
                      updateScreen();
                      break;
          case '÷' :  input += '÷';
                      updateScreen();
                      break;
          case 'x' :  input += 'x';
                      updateScreen();
                      break;
          case 'C' :  input = '';
                      updateScreen();
                      break;
          case '=' :  evaluateThis();
                      updateScreen();
                      break;
        }
      } else {
        switch (target.text()) {
          case 'C' :  input = '';
                      updateScreen();
                      break;
        }
      }
    }
  }

  function evaluateThis() {
    let validNumber = /[0-9]+[+x÷\-][0-9]+/;
    if (!validNumber.test(input) || (input[0] === '+') || (input[0] === 'x') || (input[0] === '÷') || ((input[(input.length-1)]==='0') && ( input[(input.length-2)]==='÷'))) {
      input = 'Error';
    } else if (input[0] === '-') {
      input = 'No negatives';
    } else {
      let accumulator = 0;
      let accString = '';
      let theOp = '';
      for (i=0; i<input.length; i++) {
        if ( (input[i] !== '+') && (input[i] !== '-') && (input[i] !== 'x') && (input[i] !== '÷') ) {
          accString += input[i];
          console.log(accString);
        } else {
          accumulator = parseFloat(accString);
          theOp = input[i];
          accString = '';
        }
      }
      switch (theOp) {
        case '+' :  input = (Math.round((accumulator + parseFloat(accString))*100000000)/100000000).toString();;
                    break;
        case '-' :  input = (Math.round((accumulator - parseFloat(accString))*100000000)/100000000).toString();;
                    break;
        case 'x' :  input = (Math.round((accumulator * parseFloat(accString))*100000000)/100000000).toString();
                    break;
        case '÷' :  input = (Math.round((accumulator / parseFloat(accString))*100000000)/100000000).toString();
                    break;
      }
    }
  }


})();
