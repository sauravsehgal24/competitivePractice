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