function isLowerCaseChar(char) {
    if (typeof char !== 'string' || char.length !== 1) {
        console.error('Input must be a single character.');
        return false;
    }
    
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
}
console.log(isLowerCaseChar('a')); 
console.log(isLowerCaseChar('Z')); 
console.log(isLowerCaseChar('8')); 
console.log(isLowerCaseChar('#')); 
