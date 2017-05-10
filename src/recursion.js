// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n === 0) {
    return 1;
  }
  if(n < 0){
    return null;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  var i = Array.from(arguments)[1] || 0;
  if (i === array.length - 1) {
    return array[i];
  }
  if (!array.length) {
    return 0;
  }

  return array[i] + sum(array, ++i);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  array.forEach(function(value, i, array) {
    if (Array.isArray(value)) {
      sum += arraySum(value);
    }
    else sum += value;
  })
  return sum;

};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  }
  else if(n === 1) {
    return false;
  }
  if(n < 0) {
    return isEven(n + 2);
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  if(n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var rangeArray =  [];
  if (x === y - 1 || x === y || x === y + 1) {
    return rangeArray;
  }
  if (x > y) {
    rangeArray.push(x - 1);
    return rangeArray.concat(range(x - 1, y));
  }
  rangeArray.push(x + 1);
  return rangeArray.concat(range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1) {
    return base;
  }
  if (exp === 0) {
    return 1;
  }
  if(exp < 0) {
    return  exponent(base, exp + 1) / base;
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n / 2 === 2) {
    return true;
  }
  if(n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (!string.length) {
    return string;
  }
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/\s/g, "").toLowerCase();
  if (string.length < 2) {
    return true;
  }
  if(string[0] !== string[string.length - 1]) {
    return false;
  }
  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(y === 0 && x === 0) {
    return NaN;
  }
  if(y === 0 || y === 1) {
    return 0;
  }
  if(y < 0 && x < 0) {
    return x < y ? modulo(x - y, y) : x;
  }
  if (x < 0 && -x > y) {
    return modulo(-x, y);
  }
  if(x < y) {
    return x
  }
  return modulo(x - y, y)
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  if(y < 0) {
    return -(multiply(x, -y));
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
if (x < y) {
  return 0;
}
if(x === 0 && y == 0) {
  return NaN;
}
if(y < 0){
  return -(divide(x + y, y));
}
return 1 + divide(x-y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  var int = Array.from(arguments)[2] || x;
  if (x < 1 || y < 1) {
    return null;
  }
  if (x % int === 0 && y % int === 0) {
    return int;
  }
  return  gcd(x, y, --int);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length === 0 && str2.length === 0) {
    return true;
  }
  if(str1[0] !== str2[0]){
    return false;
  }
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  var array = [str[0]];
  if (str.length === 1) {
    return array;
  }
  return array.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var reverseArray = [];
  if(array.length === 0) {
    return reverseArray;
  }
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var list = [];
  if(list.length === length) {
    return list;
  }
  list.push(value);
  return list.concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = Array.from(arguments)[2] || 0;
  if (array.length === 0){
    return count;
  }
  if(array[0] === value) {
    count += 1;
  }
  return  countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var mapArray = [];
  var i = Array.from(arguments)[2] || 0;
  mapArray.push(callback(array[i], i, array))
  if(i === array.length - 1) {
    return mapArray;
  }
  return mapArray.concat(rMap(array, callback, ++i));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var keysArray = Array.from(arguments)[2] || [];
  if(obj[key]) {
    keysArray.push(key);
  }
  for (var tag in obj) {
    if(typeof obj[tag] === 'object') {
      countKeysInObj(obj[tag], key, keysArray);
    }
  }
  return keysArray.length;

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var valsArray = Array.from(arguments) [2] || [];
  for(var key in obj) {
    if(obj[key] === value) {
      valsArray.push(obj[key]);
    }
    if(typeof obj[key] === 'object') {
      countValuesInObj(obj[key], value, valsArray)
    }
  }
  return valsArray.length;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for(var tag in obj) {
    if(tag === key) {
      obj[newKey] = obj[tag];
      delete obj[tag];
    }
    if (typeof obj[tag] === 'object') {
      replaceKeysInObj(obj[tag], key, newKey);
    }
  }
  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  var i = Array.from(arguments)[1] || 0;
  var fibonacciArray = Array.from(arguments)[2] || [0, 1];
  if (n + 1 === fibonacciArray.length) {
    return fibonacciArray;
  }
  if (n < 1) {
    return null;
  }
  fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1]);
  return (fibonacci(n, ++i, fibonacciArray));
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  var i = Array.from(arguments)[1] || 0;
  var nthArray = Array.from(arguments)[2] ||[0, 1];
  if (n + 1 === nthArray.length) {
    return nthArray[nthArray.length - 1];
  }
  if (n === 0){
    return 0;
  }
  if(n < 0) {
    return null;
  }
  nthArray.push(nthArray[i] + nthArray[i + 1]);
  return (nthFibo(n, ++i, nthArray))
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  var capArray = [];
  if(input.length === 0) {
    return capArray;
  }
  capArray.push(input[0].toUpperCase());
  return capArray.concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  var i = Array.from(arguments)[1] || 0;
  var capFirstArray = [];
  if(i === array.length) {
    return capFirstArray;
  }
  capFirstArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  return capFirstArray.concat(capitalizeFirst(array, ++i));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = Array.from(arguments)[1] || 0;
  for (var key in obj) {
    if(obj[key] % 2 === 0) {
      count += obj[key];
    }
    if(typeof obj[key] === 'object') {
      count += nestedEvenSum(obj[key]);
    }
  }
  return count;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var result = Array.from(arguments)[1] || [];
  var i = Array.from(arguments)[2] || 0;
  if (i === arrays.length) {
    return result;
  }
  if(Array.isArray(arrays[i])) {
    flatten(arrays[i], result);
  }
  else {
    result.push(arrays[i]);
  }
  return flatten(arrays, result, ++i);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
   obj = Array.from(arguments)[1] || {};
   var i = Array.from(arguments)[2] || 0;
  if (i === str.length) {
    return obj;
  }
    if(!obj[str[i]]) {
      obj[str[i]] = 1;
    }
    else {
      obj[str[i]]++;
    }
  return letterTally(str, obj, ++i);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  var compressArray = Array.from(arguments)[1] || [];
  var i = Array.from(arguments)[2] || 0;
  if(i === list.length) {
    return compressArray;
  }
  if(list[i + 1] !== list[i]) {
    compressArray.push(list[i]);
  }
  return compress(list, compressArray, ++i);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var i = Array.from(arguments)[2] || 0;
  var augmentedArray = Array.from(arguments)[3] || [];
  if(i === array.length) {
    return augmentedArray;
  }
    augmentedArray.push(array[i]);
    augmentedArray[i].push(aug);
  return augmentElements(array, aug, ++i, augmentedArray);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var i = Array.from(arguments)[1] || 0;
  var zeroedArray = Array.from(arguments)[2] || [];
  if(i === array.length) {
    return zeroedArray;
  }
  if(array[i] === 0 && array[i - 1] !== 0) {
    zeroedArray.push(array[i]);
  }
  if(array[i] !== 0) {
    zeroedArray.push(array[i]);
  }
  return minimizeZeroes(array, ++i, zeroedArray)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var alternateArray = Array.from(arguments)[1] || [];
  var i = Array.from(arguments)[2] || 0;
  if (i === array.length) {
    return alternateArray;
  }
  if(array[i] < 0) {
    array[i] = -(array[i]);
  }
    if((i + 2) % 2 !== 0) {
    array[i] = -(array[i]);
  }
    alternateArray.push(array[i]);
  return alternateSign(array, alternateArray, ++i);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var newStr = Array.from(arguments)[1] || '';
  var array = str.split(" ");

  switch(array[0]) {
    case '1': newStr = newStr + ' one';
    break;
    case '2': newStr = newStr + ' two';
    break;
    case '3': newStr = newStr + ' three';
    break;
    case '4': newStr = newStr + ' four';
    break;
    case '5': newStr = newStr + ' five';
    break;
    case '6': newStr = newStr + ' six';
    break;
    case '7': newStr = newStr + ' seven';
    break;
    case '8': newStr = newStr + ' eight';
    break;
    case '9': newStr = newStr + ' nine';
    break;
    default: newStr = newStr +  ' ' + array[0];
    break;
  }
  if(array.length === 1) {
    return newStr.split("").slice(1).join("");
  }
  return numToText(array.slice(1).join(" "), newStr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
