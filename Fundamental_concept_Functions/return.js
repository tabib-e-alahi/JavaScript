function getSquareValue(num)
{
    const sq = num * num;

    return sq
}
/*
in return type function, normal calling like getSquareValue() will not do anything as we did not storing the return value, so return value must be recieved or direct console.log, but recieved by vairable is recommended, as we may need to use that return value

 */

getSquareValue(10)//will not do anything

const square = getSquareValue(20)

console.log(square) //400

console.log(getSquareValue(50))

