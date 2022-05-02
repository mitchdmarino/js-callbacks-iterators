let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here
const newArray = numbers.map(num => {
    return num*num
})

const newArray2 =newArray.filter(num => {
    if (num>30) {
        return true
    }
})
console.log(newArray2)