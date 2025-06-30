function reverse(str){
    return str.split('').reverse().join('')
}
console.log(reverse('string'));

function replace(str, charToReplace, strReplacement){
    return str.replace(charToReplace, strReplacement)
}
console.log(replace('spring', 'p', 't'))