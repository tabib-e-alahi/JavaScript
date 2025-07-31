const car = {
    brand: "Volvo",
    model: "MX34",
    Mileage: 60,
    color: "white"
}

for(const prop in car)
{
    // console.log(prop, car[prop]);
}

const keys = Object.keys(car);

for(const key of keys)
{
    console.log(key, car[key]);
}