// let largeCountries = ["china","india","usa","indonesia","pakistan"]
// for(i = 0; i < largeCountries.length; i++){
//     console.log(largeCountries[i])
// }

let largeCountries = ["tuvalu", "india", "usa", "indonesia", "monaco"]
// moves items to the end of the array
largeCountries.pop()
largeCountries.push("pakistan")
// moves items to the begining of the array
largeCountries.shift()
largeCountries.unshift("china")

console.log(largeCountries)
