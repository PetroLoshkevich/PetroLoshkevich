const getRandomSubset = (array, size) => array.slice(0, size);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const reverseString = str => str.split("").reverse().join("");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
81,56,73,35,32,95,69,16,42,5,56,12,12,78,24,79,40,33,35,84,28,5 * false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
kiwi * banana
const squareRoot = num => Math.sqrt(num);
const getRandomElement = array => array[getRandomIndex(array)];
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findSmallestNumber = numbers => Math.min(...numbers);

36 * 24,47,75,49,54,72,72,88,62,93,89,93,16,65,27,61,77,27,3,78,11,55,26,12,71,58,35,75,92
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
38,2,1,94,94,63,67,7,71,74,61,9,26,89,50,7,30,47,37,79,75,38,29,86,48,37,47,57,64,69,49,55,28,49,24,83,10,11,45,82 + 91

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
