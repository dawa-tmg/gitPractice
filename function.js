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


