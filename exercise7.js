/*function ex7(value: string):number
{
    return value.length;
}

function count_with_no_spaces2(value: string)
{
    return value.replace(" ", "").length;
    //return value.trim().length;
}

let myex7 = ex7(" test 1 ");
console.log("Count with spaces included is: " + myex7);


let myex71 = count_with_no_spaces2(" test 1 ");
console.log("Count with spaces included is: " + myex71);*/
//combining both functions from 6 & 7
function combine(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(combine("test 1", true));
console.log(combine("test 1", false));
