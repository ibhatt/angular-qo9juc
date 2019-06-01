import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  testArr = [];

  printArr(a) {
    // for (let i = 1; i <= 5; i++) {
    //   setTimeout(function() {
    //     console.log(i);
    //     a.push(i);
    //   }, 2000)
    // }
    for(var i = 0; i < 10; i++) {
      setTimeout((function(i) {
        a.push(i);
      })(i), 10);
    }
  }

  findPrimeNumber(number) {
    if (number === 1) {
      return `Number ${number} is a prime number`
    }

    for (let i = 2; i <= number; i++) {
      if ((number % i) === 0) {
        return `Number ${number} is not a prime number`;
      } else {
        return `Number ${number} is a prime number`;
      }
    }
  }

  createFibonnaciSequence(num) {
    let arr = [];
    if (num < 2) {
      return arr = [0, 1];
    } else {
      for (let i = 0; arr.length <= num; i++ ) {
        if (arr.length < 2) {
          arr.push(i);
        } else {
          let number = arr[arr.length - 1] + arr[arr.length - 2];
          arr.push(number);
        }
      }
      return arr;
    }
  }

  drawSequence(number) {
    // let star = '';
    // for (let row = 1; row <= number; row++) {
    //   for (let col = 1; col <= row; col++) {
    //     star += '*';
    //   }
    //   for (let col2 = 1; col2 <= number - 1; col2++) {
    //     star += ' ';
    //   }
    //   star += '\n';
    // }
    // console.log(star);
    // return star;
    let steps = '';
    for (let i = 1; i <= number; i++) {
      steps += '#'.repeat(i) + ' '.repeat(number - 1) + '\n';
    }
    console.log(steps);
    return steps;
  }

  removeDuplicatesFromArray(arr) {
    let tempArr = [];
    arr.forEach(element => {
      if (tempArr.indexOf(element) < 0) {
        tempArr.push(element);
      }
    });
    tempArr = tempArr.sort((a,b) => {return a-b})
    return tempArr;
  }

  add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      }
    }
  }

  mergeTwoSortedArrays(a, b) {
    let c = a.concat(b);
    c.sort((a, b) => {
      return a - b;
    })
    return c;
  }

  matchSumOfTwoElements(arr, sum) {
    console.log(arr , sum);
    let test;
    arr.forEach((element) => {
      arr.forEach(ele => {
        if (element + ele === sum) {
          console.log(element + ele);
          test = `The sum of ${element} & ${ele} is ${sum}`;
        }
      })
    })
    return test;
  }

  largestSumOfTwo(arr) {
    let highestNumber = arr.sort((a,b) => {return a + b})[0];
    arr.forEach((element) => {
      arr.forEach(ele => {
        if (element + ele > highestNumber && element !== ele) {
          highestNumber = element + ele;
        }
      })
    })
    return highestNumber;
  }

  missingNumber(arr) {
    arr = arr.sort((a,b) => {return a - b})
    let highestNumber = arr[arr.length - 1],
        lowestNumber = arr[0],
        missingNumber;
    for (let i = 0; i <= highestNumber; i++) {
      if (arr.indexOf(i) < 0) {
        missingNumber = i;
      }
    }
    return missingNumber;
  }

  swapNumbers(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return `a = ${a} & b = ${b}`;
  }

  sortNumbers(arr) {
    let emp: any;
    while (arr.length !== 0) {
      emp = [];
      emp.push(arr.splice(arr.indexOf(Math.min(...arr)), 1))
    }
    console.log(emp);
  }

  findNonRepeatingChar(sent) {
    let charCount = {};

    for (let i = 0; i < sent.length; i++) {
      let counter = 0;
      console.log(sent[i]);
      if (charCount[sent[i]]) {
        charCount[sent[i]]++
      } else {
        charCount[sent[i]] = 1;
      }
    }
    console.log(charCount);
  }

  lergestSum(arr) {
    arr = arr.sort((a, b) => {
      a + b;
    })
    return arr[0] + arr[1];
  }
  ngOnInit() {   
    this.printArr(this.testArr);
  }
}
