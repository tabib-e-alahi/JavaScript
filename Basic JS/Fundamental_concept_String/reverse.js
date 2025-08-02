const txt = 'I want to learn web dev.'

// let reverse = ''
// for(const letter of txt)
// {
//     reverse = letter + reverse;
// }

//------------- or

// for(let i = 0; i < txt.length; i++)
// {
//     reverse = txt[i] + reverse
// }

// ---------------- or
// for(let i = txt.length - 1; i >= 9 ; i--)
// {
//     reverse = reverse + txt[i]
// }

//=========== or

const reverse = txt.split('').reverse().join('');

console.log(reverse);