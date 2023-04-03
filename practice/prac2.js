let age = 6
if(age < 7){
    console.log("free")
} else if (age >= 6 && age <= 17){
    console.log("child discount")

} else if (age >= 18 && age <= 26) {
    console.log("student discount")

} else if (age >= 27 && age <= 66) {
    console.log("full price")

} else {
    console.log("senoir citizen discount")
}

if (age < 7) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")

} else if (age < 27) {
    console.log("student discount")

} else if (age < 67) {
    console.log("full price")

} else {
    console.log("senoir citizen discount")
}