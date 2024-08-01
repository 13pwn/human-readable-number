module.exports = function toReadable (number) {

// this is my first try so ye my code is garbage here and i already know i can do it with math

  const numberToWord = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tenthNumbers = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let firstNum;
  let secondNum;
  let thirdNum;

  if (number === 0) return 'zero';

//searching for numbers

  for (i = -1; i !== +(number.toString()[0]); i++) {
    firstNum = i + 1;
  };

  if (+(number.toString().length) > 1) {
    for (i = -1; i !== +(number.toString()[1]); i++) {
        secondNum = i + 1;
      };
  };
  
  if (+(number.toString().length) > 2) {
    for (i = -1; i !== +(number.toString()[2]); i++) {
        thirdNum = i + 1;
      };
  };

//getting result

//check for three-digit numbers

  if (+(number.toString().length) > 2 && number.toString().slice(1) >= 10 && number.toString().slice(1) <20) {
      firstNum = numberToWord[firstNum - 1];
      let result;

    switch(number.toString().slice(1)) {
        case '10': 
            result = 'ten';
        break;
        case '11':
            result = 'eleven';
        break;
        case '12':
            result = 'twelve';
        break;
        case '13':
            result = 'thirteen';
        break;
        case '14':
            result = 'fourteen';
        break;
        case '15':
            result = 'fifteen';
        break;
        case '16':
            result = 'sixteen';
        break;
        case '17':
            result = 'seventeen';
        break;
        case '18':
            result = 'eighteen';
        break;
        case '19':
            result = 'nineteen';
        break;
    }
    
    return `${firstNum} hundred ${result}`;
  } else if (+(number.toString().length) > 2 && !number.toString().endsWith('0') && number.toString()[1] == 0) {
      firstNum = numberToWord[firstNum - 1];
    thirdNum = numberToWord[thirdNum - 1];
    
    return `${firstNum} hundred ${thirdNum}`;
  } else if (+(number.toString().length) > 2 && !number.toString().endsWith('0')) {
      firstNum = numberToWord[firstNum - 1];
    secondNum = tenthNumbers[secondNum - 2];
    thirdNum = numberToWord[thirdNum - 1];
    
    return `${firstNum} hundred ${secondNum} ${thirdNum}`;
  } else if (+(number.toString().length) > 2 && number.toString().endsWith('0') && secondNum !== 0) {
    firstNum = numberToWord[firstNum - 1];
    secondNum = tenthNumbers[secondNum - 2];

    return `${firstNum} hundred ${secondNum}`;
  } else if (+(number.toString().length) > 2 && number.toString().endsWith('0') && secondNum == 0) {
      firstNum = numberToWord[firstNum - 1];

      return `${firstNum} hundred`;
  } 
  
  //check for two-digit numbers

  else if (+(number.toString().length) > 1 && number > 19 && !number.toString().endsWith('0')) {
    firstNum = tenthNumbers[firstNum - 2];
    secondNum = numberToWord[secondNum - 1];

    return `${firstNum} ${secondNum}`;
  } else if (+(number.toString().length) > 1 && number > 19 && number.toString().endsWith('0')) {
    firstNum = tenthNumbers[firstNum - 2];

    return `${firstNum}`;
  } 
  
  //result for numbers from 10 to 19

  else if (number >= 10 && number <= 19) {
    let result;

    switch(number.toString()) {
        case '10': 
            result = 'ten';
        break;
        case '11':
            result = 'eleven';
        break;
        case '12':
            result = 'twelve';
        break;
        case '13':
            result = 'thirteen';
        break;
        case '14':
            result = 'fourteen';
        break;
        case '15':
            result = 'fifteen';
        break;
        case '16':
            result = 'sixteen';
        break;
        case '17':
            result = 'seventeen';
        break;
        case '18':
            result = 'eighteen';
        break;
        case '19':
            result = 'nineteen';
        break;
    }

    return result;
  } 
  
  //result for one-digit numbers

  else {
    firstNum = numberToWord[firstNum - 1];
    return `${firstNum}`
  }
  
}
