const maxMinAvg = arr => {
  let max = 0;
  let min = 0;
  let sum = 0;
  arr.forEach(e => {
    if (e > max) {
      max = e;
    }
    if (e < min) {
      min = e;
    }
    sum += e;
  });
  let result = `The minimum is ${min}, the maximum is ${max}, and the average is ${sum /
    arr.length}.`;
  return result;
};

const fizzBuzz = n => {
  if (n < 1 || isNaN(n)) {
    console.log("Parameter must be a positive number > 0");
  }
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      str += "FizzBuzz, ";
    } else if (i % 3 == 0) {
      str += "Fizz, ";
    } else if (i % 5 == 0) {
      str += "Buzz, ";
    } else {
      str += `${i}, `;
    }
  }
  return str.substring(0, str.length - 2);
};

const validBraces = str => {
  let stack = [];
  let dict = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  for (let i = 0; i < str.length; i++) {
    if (str[0] === ")" || str[0] === "}" || str[0] === "]") {
      return false;
    } else {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        stack.push(str[i]);
        console.log(stack);
      } else {
        if (stack.pop() !== dict[str[i]]) {
          return false;
        }
      }
    }
  }
  return true;
};

const bubbleSort = arr => {
  do {
    var swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// function printArray(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// O(n) time

// function findNth(arr, n) {
//   console.log(arr[n]);
// }
// O(1) time

// function halving(n) {
//   var count = 0;
//   while (n > 1) {
//     n = n / 2;
//     count++;
//   }
//   return count;
// }
// O(log n) time

// function identityMatrix(n) {
//   var matrix = [];
//   for (var i = 0; i < n; i++) {
//     var row = [];
//     for (var j = 0; j < n; j++) {
//       if (j == i) {
//         row.push(1);
//       } else {
//         row.push(0);
//       }
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }
// O(n^2) time

const coinChange = n => {
  let a = n;
  let dict = {
    q: 25,
    d: 10,
    n: 5,
    p: 1
  };
  let change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };
  if (a > 24) {
    change.q = Math.floor(a / dict.q);
    a = Math.floor(a % dict.q);
  }
  if (a > 9) {
    change.d = Math.floor(a / dict.d);
    a = Math.floor(a % dict.d);
  }
  if (a > 4) {
    change.n = Math.floor(a / dict.n);
    a = Math.floor(a % dict.n);
  }
  if (a > 0) {
    change.p = a;
  }
  return change;
};

const userLanguages = users => {
  let str = "";
  for (let i = 0; i < users.length; i++) {
    str += users[i].fname + " " + users[i].lname + " knows ";
    for (let j = 0; j < users[i].languages.length; j++) {
      if (j == users[i].languages.length - 1) {
        if (i == users.length - 1) {
          str += "and " + users[i].languages[j] + ".";
        } else {
          str += "and " + users[i].languages[j] + ". ";
        }
      } else {
        str += users[i].languages[j] + ", ";
      }
    }
  }
  return str;
};

const binarySearch = (arr, n) => {
  let a = arr;
  while (a.length > 2) {
    if (a[Math.floor(a.length / 2)] === n) {
      return Math.floor(a.length / 2);
    } else if (a[Math.floor(a.length / 2)] > n) {
      a = a.slice(0, Math.floor(a.length / 2));
    } else if (a[Math.floor(a.length / 2)] < n) {
      a = a.slice(Math.floor(a.length / 2), a.length);
    }
  }
  return -1;
};
