function customIncludes(arr, searchElement) {
    for (const element of arr) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}
const myArray = [1, 2, 3, 4, 5];
const searchValue = 3;

console.log(customIncludes(myArray, searchValue)); 
