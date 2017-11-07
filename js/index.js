(function() {

    let input = '';

    $('#buttons-container').click(checkButton);
    $(document).keypress(checkKey);

    function updateScreen() {
      $('#screen').empty();
      $('#screen').append(input);
    }

    function checkKey() {
      if (input !== "Error" && input !== "No negatives") {
        switch (event.key) {
          case '0':
            input += '0';
            break;
          case '1':
            input += '1';
            break;
          case '2':
            input += '2';
            break;
          case '3':
            input += '3';
            break;
          case '4':
            input += '4';
            break;
          case '5':
            input += '5';
            break;
          case '6':
            input += '6';
            break;
          case '7':
            input += '7';
            break;
          case '8':
            input += '8';
            break;
          case '9':
            input += '9';
            break;
          case '+':
            input += '+';
            break;
          case '-':
            input += '-';
            break;
          case '/':
            input += '÷';
            break;
          case 'x':
            input += 'x';
            break;
          case 'C':
            input = '';
            break;
          case 'c':
            input = '';
            break;
          case '=':
            evaluateThis();
            break;
          case 'Enter':
            evaluateThis();
            break;
        }
      } else {
        switch (event.key) {
          case 'c':
            input = '';
            break;
          case 'C':
            input = '';
            break;
        }
      }
      updateScreen();
    }

      function checkButton() {
        let target = $(event.target);
        if (target.is('span')) {
          if (input !== "Error" && input !== "No negatives") {
            switch (target.text()) {
              case '0':
                input += '0';
                break;
              case '1':
                input += '1';
                break;
              case '2':
                input += '2';
                break;
              case '3':
                input += '3';
                break;
              case '4':
                input += '4';
                break;
              case '5':
                input += '5';
                break;
              case '6':
                input += '6';
                break;
              case '7':
                input += '7';
                break;
              case '8':
                input += '8';
                break;
              case '9':
                input += '9';
                break;
              case '+':
                input += '+';
                break;
              case '-':
                input += '-';
                break;
              case '÷':
                input += '÷';
                break;
              case 'x':
                input += 'x';
                break;
              case 'C':
                input = '';
                break;
              case '=':
                evaluateThis();
                break;
            }
          } else {
            switch (target.text()) {
              case 'C':
                input = '';
                break;
            }
          }
          updateScreen();
        }
      }

      function evaluateThis() {
        let validNumber = /[0-9]+[+x÷\-][0-9]+/;
        if (!validNumber.test(input) || (input[0] === '+') || (input[0] === 'x') || (input[0] === '÷') || ((input[(input.length - 1)] === '0') && (input[(input.length - 2)] === '÷'))) {
          input = 'Error';
        } else if (input[0] === '-') {
          input = 'No negatives';
        } else {
          let accumulator = 0;
          let accString = '';
          let theOp = '';
          for (i = 0; i < input.length; i++) {
            if ((input[i] !== '+') && (input[i] !== '-') && (input[i] !== 'x') && (input[i] !== '÷')) {
              accString += input[i];
            } else {
              accumulator = parseFloat(accString);
              theOp = input[i];
              accString = '';
            }
          }
          switch (theOp) {
            case '+':
              input = (Math.round((accumulator + parseFloat(accString)) * 100000000) / 100000000).toString();;
              break;
            case '-':
              input = (Math.round((accumulator - parseFloat(accString)) * 100000000) / 100000000).toString();;
              break;
            case 'x':
              input = (Math.round((accumulator * parseFloat(accString)) * 100000000) / 100000000).toString();
              break;
            case '÷':
              input = (Math.round((accumulator / parseFloat(accString)) * 100000000) / 100000000).toString();
              break;
          }
        }
      }


    })();
