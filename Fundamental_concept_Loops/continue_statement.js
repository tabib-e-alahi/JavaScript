//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
// continue ==> skip this one

let num = 0;

// while(num < 20)
// {
//     if(num == 10)
//         continue; //It will skip the iteration when num = 10, 

//     console.log(num);
//     num += 1;
// }

// what happen? the loop only print upto 9, here's the catch, when num = 10, the rest of the loop won't run, so num value will not increase by 1, so It will remain 10 forever

while (num < 20) {
    if (num == 10) {
        num += 1;
        continue; //It will skip the iteration when num = 10, 
    }

    console.log(num);
    num += 1;
}