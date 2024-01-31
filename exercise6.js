function ex6(value) {
    return value.length;
}
function count_with_no_spaces(value) {
    return value.replace(" ", "").length;
    //return value.trim().length;
}
var myex6 = ex6(" test 1 ");
console.log("Count with spaces included is: " + myex6);
var myex61 = count_with_no_spaces(" test 1 ");
console.log("Count with spaces included is: " + myex61);
