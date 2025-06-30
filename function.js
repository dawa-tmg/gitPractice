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