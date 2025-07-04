function reverse(str){
    return str.split('').reverse().join('')
}
console.log(reverse('string'));

function replace(str, charToReplace, strReplacement){
    return str.replace(charToReplace, strReplacement);
}
console.log(replace('spring', 'p', 't'))

function strLengthEven(str){
    if(str.length % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(strLengthEven('string'))


const listOfAnimal = ['dog', 'cat', 'rabbit', 'cow']
function findRabbit(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "rabbit"){
            return arr.indexOf('rabbit');
        }
    }
}
console.log(findRabbit(listOfAnimal))

function findAll(array, n) {
    const indexOfN = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === n){
            indexOfN.push(i)
        }
    }
    return indexOfN
}
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))

function splitAndAdd(arr, n) {
    for(let i = 0; i < n; i++){
        const splitIndex = Math.floor(arr.length/2)
        let splitOne = arr.slice(0, splitIndex)
        let splitTwo = arr.slice(splitIndex)
        const iteration = Math.max(splitOne.length, splitTwo.length)
        
        if (splitOne.length < splitTwo.length) {
            splitOne = Array(splitTwo.length - splitOne.length).fill(0).concat(splitOne);
        } else if (splitTwo.length < splitOne.length) {
            splitTwo = Array(splitOne.length - splitTwo.length).fill(0).concat(splitTwo);
        }
        const splitAdd = []
        for(let i = 0; i < iteration; i++){
            splitAdd.push(splitOne[i] + splitTwo[i])
        }
         arr = splitAdd;
    }
    console.log(arr)
}
splitAndAdd([1,2,3,4,5],2)

function isAValidMessage(message) {
    if (message.length === 0) {
        return true;
    }

    if (isNaN(message[0]) || !isNaN(message[message.length - 1])) {
        return false;
    }

    const strings = message.split(/[0-9]+/).filter(elem => elem !== '');
    const numbers = message.split(/[A-Za-z]+/).filter(elem => elem !== '').map(Number);

    if (strings.length !== numbers.length) {
        return false;
    }

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length !== numbers[i]) {
        return false;
        }
    }
    return true;
}

function subtractTen(num){
    return num -10
}
console.log(subtractTen(20))

function parseF(s) {
     if (isNaN(s) || typeof s === 'boolean'){
        return null;
    }
    const number = Number(s)
    return +number.toFixed(1);
}
console.log(parseF(true))

function interlockable(a, b) {
  const binaryA = a.toString(2).split('').reverse();
  const binaryB = b.toString(2).split('').reverse();
  const iteration = Math.max(binaryA.length, binaryB.length);
  
  for(let i = 0; i < iteration; i++){
    if (binaryA[i] === '1' && binaryB[i]=== '1'){
      return false;
    }
  }
  return true;
}

function integrate(coefficient, exponent) {
  return `${(coefficient/(exponent+1))}X^${exponent +1}`
}
console.log(integrate(3,2))

function calculateTip(amount, rating) {
  
  if (rating.toLowerCase() == "excellent"){
    return Math.ceil(amount * (20/100));
  }else if(rating.toLowerCase() == "great"){
    return Math.ceil(amount * (15/100));
  }else if(rating.toLowerCase() == "good"){
    return Math.ceil(amount * (10/100));
  }else if(rating.toLowerCase() == "poor"){
    return Math.ceil(amount * (5/100));
  }else if(rating.toLowerCase() == "terrible") {
    return 0;
  }else{
    return "Rating not recognised";
  }
}
console.log(calculateTip(26.95, "good"))

function validateHello(greetings) {
  const grettingList = ['hello', 'ciao', 'salut', 'hallo', 'hola','ahoj','czesc']
  let result = false;
  grettingList.forEach((elem)=> {
    if(greetings.toLowerCase().includes(elem)){
      result = true;
    }
  })
  return result;
}
console.log(validateHello('meh'))

function neutralise(s1, s2) {
  let result = '';
  for (let i = 0; i < s1.length; i++){
    if(s1[i] === s2[i]){
      result += s1[i]
    }else{
      result += '0'
    }
  }
  return result;
}
console.log(neutralise("--++--", "++--++"))

function countPositivesSumNegatives(input) {
  if(input === null || !input.length){
    return [];
  }
  let result = [0, 0];
  input.forEach((element)=>{
    if(element > 0){
      result[0] += 1 
    }else{
      result[1] += element
    }
  })
  return result;
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

function getASCII(c){
  return c.charCodeAt()
}
console.log(getASCII('A'))

function removeEveryOther(arr){
  const removedElement = []
  for(let i = 0; i < arr.length; i ++){
    if(i % 2 === 0){
       removedElement.push(arr[i])
    }
  }
  return removedElement;
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

const cannonsReady = (gunners) => {
  for(const reply in gunners){
    if (gunners[reply] === 'nay'){
      return 'Shiver me timbers!';
    }
  }
  return 'Fire!';
}
console.log(cannonsReady(a))