//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


let num = 0

do{
    console.log(num)
    num++
}while(num < 10)

/*
======= When to use:

-> When you need to run the loop at least once before checking the condition.
-> It’s best when the loop should always run once (e.g., for menu prompts or retry mechanisms) and then continue based on a condition.
*/    

