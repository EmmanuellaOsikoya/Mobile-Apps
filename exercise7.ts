//combining both functions from 6 & 7
function combine(value:string, spaces:boolean)
{
    let count = 0;
    if(spaces)
    {
        count = value.length;
    }
    else
    {
        count = value.replace(" ", "").length;
    }
    return count;
}

console.log(combine("test 1", true));
console.log(combine("test 1", false));
