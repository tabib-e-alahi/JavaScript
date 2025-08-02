const num = [1, 2, 3, 4, 5, 6, 7];

// num.reverse()

// console.log(num)

const rev_num = []

// for(const i of num)
// {
//     rev_num.unshift(i);
// }

// for(let i = 0; i < num.length; i++)
// {
//     rev_num.unshift(num[i]); 
// }

for(let i = num.length - 1; i >= 0; i--)
{
    rev_num.push(num[i]); 
}

console.log(rev_num)
