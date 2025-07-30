const names = 'Tabib,Rahim,Tazim,Karim,Salim';

const splitted_names = names.split(',') //here seperator is ','
console.log(splitted_names); // [ 'Tabib', 'Rahim', 'Tazim', 'Karim', 'Salim' ]

//now we can again join this with join()

const joined_names = splitted_names.join(',');
console.log(joined_names, typeof joined_names); 
console.log(splitted_names.join('_')); //Tabib_Rahim_Tazim_Karim_Salim