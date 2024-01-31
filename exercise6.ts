function ex6(value: string):number
{
    return value.length;
}

function count_with_no_spaces(value: string)
{
    return value.replace(" ", "").length;
    //return value.trim().length;
}




let myex6 = ex6(" test 1 ");
console.log("Count with spaces included is: " + myex6);


let myex61 = count_with_no_spaces(" test 1 ");
console.log("Count with spaces included is: " + myex61);