// 12 inch = 1ft

function convert_inch_to_ft(height_inch)
{
    const height_ft = parseInt(height_inch / 12);
    height_inch %= 12
    return height_inch == 0 ?  [height_ft] :  [height_ft, height_inch]
}

const converted = convert_inch_to_ft(120);

if(converted.length > 1){
    console.log(`Height: ${converted[0]}ft ${converted[1]}inch.`)
}
else{
    console.log(`Height: ${converted[0]}ft.`)
}