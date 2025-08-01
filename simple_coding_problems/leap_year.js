/**
 * A year is leap year if:
 * => year is divisible by 4 and year is not divisble by 100.
 * => 
 */


function isLeapYear(year)
{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        return true

    }
    return false
}

const leap_year = isLeapYear(2052);
console.log(leap_year);