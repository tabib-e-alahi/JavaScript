//The break statement "jumps out" of a loop.

// break -> stop the loop

let num = 0;

while(num < 20)
{
    if(num == 10)
        break; //the break statement ends the loop ("breaks" the loop) when the loop counter (num) is 10
    
    console.log(num);
    num += 1;

}