// REMEMBER: in dynamic programming, keep in mind the return for lowest child process and the second lowes as well
// for example: we know [1,1] matrix can only be reached in 1 attempt but this info is kinda not very interesting, so we need to note return for lets say [1,2] or [2,1] which is also 1
// and this gives us an idea of a pattern to traverse which is [i,i-1] and [i-1,i]

// FACTORIAL
const factorial = (param) => {
  if (param === 0) return 1;
  if (param < 0) return "fuck you";
  return param * factorial(param - 1);
};

// SUM OF RANGE
const sum = (param) => {
  if (param === 0) return 0;
  return param + sum(param - 1);
};

// CHECK ARRAY
const productOfArray = (array) => {
  if (array.length === 0) return 1;
  const valTop = array[0];
  return valTop * productOfArray(array.slice(1));
};

// CHECK IF OBJ CONTAINS VAL
const isContainValueInObj = (obj, value) => {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      const val = isContainValueInObj(obj[key], value);
      if (val) {
        return val;
      } else {
        continue;
      }
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

// TOTAL INTS IN ARRAY
const totalIntsInArray = (array) => {
  if (array.length === 0) return 0;
  if (Number.isInteger(array)) {
    count = count + 1;
  }
  let count = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      count = count + totalIntsInArray(array[i]);
    }
    if (Number.isInteger(array[i])) {
      count = count + 1;
    }
  }
  return count;
};

// CREATE AN ARRAY WITH VALS
const repliArray = (times, val) => {
  let array = [];
  if (times < 0) return [];
  if (times === 1) {
    return [val];
  }
  array = [val, ...repliArray(times - 1, val)];
  return array;
};

// COUNT NUMBER OF ATTEMPTS TO TRAVERSE 2D MATRIX
const attemptsToTraverse2DMatrix = (row, col, memo = {}) => {
  if (row === 1 || col === 1) return 1;
  if (row === 0 || col === 0) return 0;
  const moveRight = col === 1 ? 1 : col - 1;
  const moveDown = row === 1 ? 1 : row - 1;
  if (memo[row] && memo[row][col]) return memo[row][col];
  memo[row] = {
    [col]:
      attemptsToTraverse2DMatrix(row, moveRight, memo) +
      attemptsToTraverse2DMatrix(moveDown, col, memo),
  };
  return memo[row][col];
};

// ARRAY OF INCREASING SUB-SEQUENCES
const increasingSubSeqs = (arr, n = 0, vals = []) => {
  if (vals[n]) {
    return vals[n];
  }
  if (arr.length - 1 === n) {
    vals[n] = [arr[n]];
    return vals[n];
  }
  for (var j = n + 1; j < arr.length; j++) {
    if (arr[n] < arr[j]) {
      vals[n] = [arr[n], ...increasingSubSeqs(arr, j, vals)];
      if (n === 0) return vals;
      return vals[n];
    } else {
      vals[n === 0 ? 0 : n] = [
        arr[n],
        ...increasingSubSeqs(arr, n === 0 ? 1 : j, vals),
      ];
    }
  }
  return vals;
};

// LONGEST INCREASING SUB-SEQUENCE
const longestIncreasingSubSeq = (
  arr,
  obj = { vals: [], maxlength: 0 },
  _n = 0
) => {
  console.log(obj);
  if (_n === arr.length - 1) {
    obj.vals[_n] = 1;
    return obj;
  }
  for (var n = _n; n < arr.length; n++) {
    if (obj && obj.vals && obj.vals[n]) return obj;
    for (var j = n + 1; j < arr.length; j++) {
      if (arr[n] < arr[j]) {
        const r = 1 + lengthIncreasingSubSeqs(arr, obj, j).vals[j];
        console.log(r);
        if (!obj.vals[n] || obj.vals[n] < r) {
          obj.vals[n] = r;
        }
      } else {
        if (!obj.vals[n]) {
          obj.vals[n] = 1;
        }
      }
    }
  }
  return obj;
};

// ARRAY OF LENGTH OF INCREASING SUB-SEQUENCES
const lengthIncreasingSubSeqs = (arr, vals = [], _n = 0) => {
  if (_n === arr.length - 1) {
    vals[_n] = 1;
    return vals;
  }
  for (var n = _n; n < arr.length; n++) {
    if (vals[n]) return vals;
    for (var j = n + 1; j < arr.length; j++) {
      if (arr[n] < arr[j]) {
        const r = 1 + lengthIncreasingSubSeqs(arr, vals, j)[j];
        if (!vals[n] || vals[n] < r) {
          vals[n] = r;
        }
      } else {
        if (!vals[n]) {
          vals[n] = 1;
        }
      }
    }
  }
  return vals;
};

// GET SECOND SMALLEST VAL IN ARRAY
const smallestValInArray = (arr, n = 0) => {
  if (!arr) return "No Array Found";
  if (n === arr.length - 1) return arr[n];
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[1] : arr[0];
  if (n !== arr.length - 1) {
    const val = smallestValInArray(arr, n + 1);
    return arr[n] < val ? arr[n] : val;
  }
};

// GET SECOND SMALLEST VAL IN ARRAY
const secSmallestValInArray = (
  arr,
  n = 0,
  vals = { smallestVal: 0, secSmallestVal: 0 }
) => {
  if (!arr) return "No Array Found";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2)
    return arr[0] > arr[1]
      ? { smallestVal: arr[1], secSmallestVal: arr[0] }
      : { smallestVal: arr[0], secSmallestVal: arr[1] };
  if (n === arr.length - 2)
    return arr[n] > arr[n - 1]
      ? { smallestVal: arr[n - 1], secSmallestVal: arr[n] }
      : { smallestVal: arr[n], secSmallestVal: arr[n - 2] };
  if (n !== arr.length - 2) {
    const { smallestVal, secSmallestVal } = secSmallestValInArray(
      arr,
      n + 1,
      vals
    );
    if (arr[n] < smallestVal) {
      vals = {
        smallestVal: arr[n],
        secSmallestVal: smallestVal,
      };
    } else {
      vals = {
        smallestVal: smallestVal,
        secSmallestVal: secSmallestVal,
      };
    }
  }
  return vals;
};

const coinChange = (num, arr, memo = []) => {
  if (arr.length === 0) return 0;
  if (memo[num]) return memo[num];
  if (num === 0) {
    memo[0] = 1;
    return memo[0];
  }
  if (num < 0) return 0;
  for (var i = 0; i < arr.length; i++) {
    if (!memo[num]) memo[num] = 0;
    memo[num] = memo[num] + coinChange(num - arr[i], arr, memo);
  }
  return memo[num];
};

// Shortest path from x,y to x^,y^
const findShortestPath = (
  current = { row: 0, col: 0 },
  end = { row: 2, col: 3 }
) => {
  const { row: x, col: y } = current;
  const { row: dx, col: dy } = end;
  // base case
  if (dx === 0 && dy === 0) return [0, 0];
  if (x === dx && y === dy) return [[dx, dy]];
  // Logic
  //onst spRight = findShortestPath({ row: x + 1, col: y });
  //const spLeft = findShortestPath({ row: x, col: y + 1 });
  let spRight = null,
    spDown = null,
    spDnal = null;
  if (y != dy) {
    spRight = findShortestPath({ row: x, col: y + 1 }, end);
  }
  if (x != dx) {
    spDown = findShortestPath({ row: x + 1, col: y }, end);
  }
  if (y != dy && x != dx)
    spDnal = findShortestPath({ row: x + 1, col: y + 1 }, end);

  let minPath = spDnal || spDown || spRight;

  const allPossiblePaths = [spRight, spDnal, spDown];
  allPossiblePaths.map((el) => {
    if (el && el.length < minPath) minPath = el;
  });

  const shortestPath = [[x, y], ...minPath];
  return shortestPath;
};

// Power Set
const powerSet = (arr, n = 0, memo = []) => {
  if (n === arr.length - 1) {
    memo[n] = [[], [arr[n]]];
    return memo[n];
  }
  let p = powerSet(arr, n + 1, memo);
  let p2 = [];
  for (var i = 0; i < p.length; i++) {
    if (p[i].length !== 0) {
      p2 = [...p2, [arr[n], ...p[i]]];
    }
  }
  memo[n] = [[arr[n]], ...p, ...p2];
  return memo[n];
};

// First and Last
const firstAndLast = (arr) => {
  if (!arr || arr.length == 0) {
    return [0, 0];
  }
  let first = arr[0],
    last = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      first = arr[i];
    } else {
      if (arr[i] < last) {
        last = arr[i];
      }
    }
  }
  return [first, last];
};

// PRACTICE QUESTIONS
//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
//https://www.geeksforgeeks.org/dynamic-programming/#basicProblems
const fAndS = firstAndLast([1, 2, 3]);
console.log(`\nFirst=${fAndS[0]}  Last=${fAndS[1]}`);
console.log(`\n--------------------------------------------------------`);

const A = [1, 2];
const powerSetOfSet = powerSet(A);
console.log(
  `\nPower Set of [${A}]\n--------------------------------------------------------`
);
console.log(powerSetOfSet);
console.log(`\nTotal objects in powerSet = ${powerSetOfSet.length}`);

const spDest = { row: 3, col: 2 };
const sPath = findShortestPath({ row: 0, col: 0 }, spDest);
console.log(`\n--------------------------------------------------------`);
console.log(sPath);
console.log(
  `\nShortest path from [0,0] to [${spDest.row},${spDest.col}] = ${sPath}`
);

const coinArray = [1, 2, 3];
const coin = 4;
const numWaysForCoinChange = coinChange(coin, coinArray);
console.log(`\n--------------------------------------------------------`);
console.log(
  `\nNumber of ways we can get change for ${coin} = ${numWaysForCoinChange}`
);

const lisArray = [4, 7, 5, 6, 8, 9];
console.log(`\n--------------------------------------------------------`);
const arraylengthISeq = lengthIncreasingSubSeqs(lisArray);
console.log(`Array of Lengths of Increasing Sub Sequences in Array = `);
console.log(arraylengthISeq);

console.log(`\n--------------------------------------------------------`);
//const mdArrtay = [[3, [5]], 0, 2, ["foo"], [], [4, [5, 6]]];
const matrix = { row: 100, col: 100 }; // should be 3
const matrixTraverseVal = attemptsToTraverse2DMatrix(matrix.row, matrix.col);
console.log(
  `Number of ways [${matrix.row},${matrix.col}] matrix can be traversed = ${matrixTraverseVal}`
);

console.log(`\n--------------------------------------------------------`);
//const mdArrtay = [[3, [5]], 0, 2, ["foo"], [], [4, [5, 6]]];
const times2 = 10;
const numVal2 = 5;
const val27 = repliArray(times2, numVal2);
console.log(`ARRAY = ${val27}`);

console.log(`\n--------------------------------------------------------`);
//const mdArrtay = [[3, [5]], 0, 2, ["foo"], [], [4, [5, 6]]];
const mdArray = [4, 4, "sdas", ["23121", 32132], [[[234]], "asd", 231]];
const val6 = totalIntsInArray(mdArray);
console.log(`Num of ints in array = ${val6}`);

console.log(`\n--------------------------------------------------------`);
const obj = {
  jam: {
    test: {
      sam: {
        jam2: "newman",
        jam3: "newman3",
      },
    },
  },
  some: {
    cool: "coolval",
  },
  friend: "friendval",
};
const val5 = isContainValueInObj(obj, "friendval");
console.log(`is val in obj = ${val5}`);

console.log(`\n--------------------------------------------------------`);
const num = 3;
const val = factorial(num);
console.log(`factorial of ${num} = ${val}`);

console.log(`\n--------------------------------------------------------`);
const num2 = 5;
const val2 = sum(num2);
console.log(`sum of range 1-${num2} = ${val2}`);

console.log(`\n--------------------------------------------------------`);
const array = [5, 4, 5, 3, -1];
const val3 = productOfArray(array);
console.log(`product of vals in array = ${val3}`);

console.log(`\n--------------------------------------------------------`);
const valArray = [10, 8, 11, 4, 5, 13];
const valArraySecSmallest = secSmallestValInArray(valArray);
console.log(
  `Smallest val in array = ${valArraySecSmallest.smallestVal}\nSecond Smallest val in array = ${valArraySecSmallest.secSmallestVal}`
);
